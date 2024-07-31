import { useEffect, FC, JSX,  MouseEvent } from 'react';
import { Backdrop, ModalWindow, Overlay } from './Modal.styled';

interface KeyboardEvent {
  key: string;
}

// type Props = {
//   children: JSX.Element | JSX.Element[] |( () => JSX.Element)
// }
interface ModalProps{
  onClose: () => void;
  children?: JSX.Element | JSX.Element[] 
}

export const Modal: FC<ModalProps> = ({onClose,children}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleClose = (e:MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) {
      onClose();

    }
  };
  return (
      <Backdrop>     
      <Overlay onClick={handleClose}>
        <ModalWindow>                  
          <div>{children}</div>
        </ModalWindow>
        </Overlay>  
     </Backdrop>  
  );
};



