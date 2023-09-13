import { Component } from 'react';

import { fetchImages } from 'shared/images-api';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from 'shared/Loader/Loader';
import Modal from 'shared/Modal/Modal';
import Button from 'shared/Button/Button';

import styles from './images-search.module.scss';
import { toast } from 'react-toastify';

class ImagesSearch extends Component {
  state = {
    search: '',
    items: [],
    loading: false,
    error: null,
    page: 1,
    showModal: false,
    total: 0,
    imgDetails: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      this.setState({ loading: true });
      this.fetchImages();
    }
  }
  async fetchImages() {
    try {
      const { search, page } = this.state;
      const { hits, totalHits } = await fetchImages(search, page);
      if (hits.length === 0) {
        toast.error('No result found!');
      }
      this.setState(({ items }) => ({
        items: [...items, ...hits],
        total: totalHits,
      }));
    } catch (err) {
      this.setState({ err: err.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  searchImages = ({ search }) => {
    if (search !== this.state.search) {
      this.setState({ search, items: [], page: 1 });
    } else toast('you have already entered this query!');
  };
  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  openModal = (largeImageURL, tags) => {
    this.setState({
      showModal: true,
      imgDetails: { largeImageURL, tags },
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
      imgDetails: null,
    });
  };
  render() {
    const body = document.querySelector('body');
    const { items, loading, error, total, page, showModal, imgDetails } =
      this.state;
    const { searchImages, loadMore, closeModal, openModal } = this;
    const isImages = Boolean(items.length);
    const totalPage = Math.ceil(total / 12);
    return (
      <div className={styles.wrapper}>
        <Searchbar onSubmit={searchImages} />
        <ImageGallery items={items} onClick={openModal} />

        {loading && <Loader />}

        {error && <p className={styles.errorMessage}>{error}</p>}

        {isImages && page < totalPage && (
          <Button onLoadMore={loadMore} text={'Load more'} />
        )}

        {showModal
          ? body.classList.add('overflow-hidden')
          : body.classList.remove('overflow-hidden')}

        {showModal && (
          <Modal close={closeModal}>
            <img src={imgDetails.largeImageURL} alt={imgDetails.tags} />
          </Modal>
        )}
      </div>
    );
  }
}

export default ImagesSearch;
