import { PropTypes } from 'prop-types';

import styles from './image-galleryItem.module.scss';

const ImageGalleryItem = ({ webformatURL, largeImageURL, tags, onClick }) => {
  return (
    <li
      className={styles.gallery_item}
      onClick={() => onClick(largeImageURL, tags)}
    >
      <img src={webformatURL} alt={tags} className={styles.item_image} />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  tags: PropTypes.string,
  largeImageURL: PropTypes.string,
};
