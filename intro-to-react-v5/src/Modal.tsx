import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal: React.FC = ({ children }) => {
  const elRef = useRef(document.createElement('div'));

  useEffect(() => {
    const ref = elRef;
    const modalRoot = document.getElementById('modal');
    if (!modalRoot) {
      return;
    }
    modalRoot.appendChild(elRef.current);
    // eslint-disable-next-line consistent-return
    return () => {
      modalRoot.removeChild(ref.current);
    };
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
