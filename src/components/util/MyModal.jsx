import { styled } from '@mui/material/styles';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';

const OverLayDiv = styled('div')`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #808080a0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerDiv = styled('div')`
  width: 50%;
  height: 50%;
  border: 3px solid black;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MyModal = ({ children, isOpen, closeModal }) => {
  useEffect(() => {
    function handleEsc(evt) {
      if (evt.key === 'Escape') {
        closeModal();
      }
    }

    //after render
    window.addEventListener('keydown', handleEsc);

    return () => {
      //after unmount
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  if (!isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <>
      <OverLayDiv onClick={closeModal}>
        <ContainerDiv
          onClick={(evt) => {
            evt.stopPropagation();
          }}
        >
          {children}
        </ContainerDiv>
      </OverLayDiv>
    </>,
    document.body
  );
};

export default MyModal;
