import { useState,memo,useCallback  } from 'react';
import PropTypes from 'prop-types';

import styles from './searchbar.module.scss';
import initialState from './initialState';

const Searchbar = ({onSubmit}) => {
  const [state, setState] = useState({...initialState});

const handleChange = useCallback (({ target }) => {
    const { name, value } = target;
    setState(prevState=>{
      return {...prevState, [name]:value} 
      
    })
  },[]);
  const handelSubmit = e => {
    e.preventDefault();
    onSubmit(search);
    setState({...initialState});
  };

  const {search} = state;
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

export default memo(Searchbar);

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};