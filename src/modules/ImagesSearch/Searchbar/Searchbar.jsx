import { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './searchbar.module.scss';
class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  handelSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit({ ...this.state });
    this.reset();
  };
  reset() {
    this.setState({
      search: '',
    });
  }

  render() {
    const { search } = this.state;
    const { handleChange, handelSubmit } = this;

    return (
      <header className={styles.searchbar}>
        <form className={styles.form} onSubmit={handelSubmit}>
          <button type="submit" className={styles.button}>
            <span className={styles.button_label}>Search</span>
          </button>

          <input
            value={search}
            onChange={handleChange}
            className={styles.input}
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            required
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
