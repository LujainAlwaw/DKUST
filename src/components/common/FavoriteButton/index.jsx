import styled from 'styled-components';
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';

const StyledFavoriteBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.$isFav ? '#EF4444' : '#FFFFFF')};
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 2;

  &:hover {
    background: rgba(255, 255, 255, 0.4);
    transform: scale(1.05);
  }

  [dir="rtl"] & {
    right: auto;
    left: 16px;
  }
`;

export default function FavoriteButton({ isFavorite, onToggle }) {
  const handleClick = (e) => {
    e.stopPropagation();
    if (onToggle) {
      onToggle(!isFavorite);
    }
  };

  return (
    <StyledFavoriteBtn $isFav={isFavorite} onClick={handleClick} type="button">
      {isFavorite ? <FaHeart /> : <FiHeart />}
    </StyledFavoriteBtn>
  );
}