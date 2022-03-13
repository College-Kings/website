import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './index.module.css';

const LauncherModal = ({ show, onClose, children, currRef }) => {
  const [isBrowser, setIsBrowser] = useState(false);
 
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleClose = (e) => {
    if (currRef && currRef.current && !currRef.current.contains(e.target)) {
      e.preventDefault();
      onClose();
    }
  };

  const modalContent = show ? (
    <div className={styles.overlay} onClick={handleClose}>
      <div className={styles.modal}>
        <div className="w-full h-full  flex justify-center items-center z-0">
          {children}
        </div>
      </div>
    </div>
  ) : null;
  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root')
    );
  } else {
    return null;
  }
};

export default LauncherModal;
