
import { useEffect, useState } from 'react';

export function useApiModalHandler() {
  const [showApiModal, setShowApiModal] = useState(false);
  const [modalContext, setModalContext] = useState<{
    type: string;
    title: string;
    data: any;
  } | null>(null);

  useEffect(() => {
    const handleOpenModal = (event: CustomEvent) => {
      const { type, title, data } = event.detail;
      
      if (type === 'api-import') {
        setModalContext({ type, title, data });
        setShowApiModal(true);
      }
    };

    window.addEventListener('open-modal', handleOpenModal as EventListener);

    return () => {
      window.removeEventListener('open-modal', handleOpenModal as EventListener);
    };
  }, []);

  const closeApiModal = () => {
    setShowApiModal(false);
    setModalContext(null);
  };

  return {
    showApiModal,
    modalContext,
    closeApiModal
  };
}
