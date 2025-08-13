import { useState } from 'react';

function useModal(initState = false) {
  const [isOpen, setIsOpen] = useState(initState);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return { isOpen, openModal, closeModal };
}

export default useModal;
