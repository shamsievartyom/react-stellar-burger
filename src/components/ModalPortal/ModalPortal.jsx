import React from 'react';
import ReactDOM from 'react-dom';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';

const ModalPortal = ({ children, setModalVisability }) => {

  ModalPortal.propTypes = {
    children: PropTypes.object,
    children: PropTypes.object,
  };

  const modalRoot = document.getElementById('modal-root');

  return ReactDOM.createPortal(
    <Modal setModalVisability={setModalVisability}>{children}</Modal>,
    modalRoot
  );
};

export default ModalPortal;