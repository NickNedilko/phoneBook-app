import styled from 'styled-components';
import { RiContactsFill } from 'react-icons/ri';
import { MdDelete } from 'react-icons/md';
import { BsPencilFill } from 'react-icons/bs';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding-bottom: 8px;
  margin-bottom: 20px;
  border-bottom: 2px solid #1565c0;
`;

export const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export const ContactWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  gap: 10px;

  @media screen and (max-width: 320px) {
    flex-direction: column;
  }
`;

export const Avatar = styled(RiContactsFill)`
  width: 30px;
  height: 30px;
  color: #1565c0;
`;

export const Name = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.16;
  color: #607d8b;
`;

export const Number = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 1.16;
  color: #1565c0;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 30px;
  height: 30px;
  cursor: pointer;
  border: none;

  color: #607d8b;
  background-color: inherit;
  transition: all 0.45s ease-Out;

  :hover {
    color: #5400ba;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  gap: 5px;

  @media screen and (max-width: 320px) {
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }
`;

export const DeleteIcon = styled(MdDelete)`
  width: 30px;
  height: 30px;
  color: inherit;
`;

export const EditIcon = styled(BsPencilFill)`
  width: 25px;
  height: 25px;
  color: inherit;
`;