import { useEffect,useCallback } from 'react';
import { createPortal } from 'react-dom';
import styles from './modal.module.scss';
import { CgClose } from 'react-icons/cg';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, close }) => {

  const closeModal = useCallback(({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      close();
    }
  },[close]);

  useEffect(()=>{
    window.addEventListener('keydown', closeModal);
    return ()=> window.removeEventListener('keydown', closeModal);
  },[closeModal])

  return createPortal(
    <div className={styles.overlay} onClick={closeModal}>
      <div className={styles.modal}>
        <button
          type="button"
          aria-label="close button"
          className={styles.close}
          onClick={close}
        >
          <CgClose />
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );


}


export default Modal;

/*
class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
  }

  closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      this.props.close();
    }
  };

  render() {
    const { children, close } = this.props;
    const { closeModal } = this;

    return createPortal(
      <div className={styles.overlay} onClick={closeModal}>
        <div className={styles.modal}>
          <button
            type="button"
            aria-label="close button"
            className={styles.close}
            onClick={close}
          >
            <CgClose />
          </button>
          {children}
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
*/