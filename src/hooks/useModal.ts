import { useState, useCallback } from "react";

type TuseModal = () => {
  isModalOpen: boolean,
  openModal: () => void,
  closeModal: () => void,
}


export const useModal: TuseModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return {
    isModalOpen,
    openModal,
    closeModal,
  };
};