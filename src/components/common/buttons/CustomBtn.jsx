import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 700;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease-in-out;

  background-color: ${({ $bgColor }) => $bgColor || '#00E676'};
  color: ${({ $color }) => $color || '#0A192F'};
  border: ${({ $borderColor }) => ($borderColor ? `1px solid ${$borderColor}` : 'none')};
  
  padding: ${({ $size }) => 
    $size === 'sm' ? '6px 14px' : $size === 'lg' ? '14px 28px' : '10px 22px'};
  font-size: ${({ $size }) => 
    $size === 'sm' ? '0.8rem' : $size === 'lg' ? '1rem' : '0.9rem'};
  border-radius: ${({ $size }) => 
    $size === 'sm' ? '6px' : $size === 'lg' ? '10px' : '8px'};

  &:hover {
    opacity: 0.88;
    transform: translateY(-1px);
  }
`;

const IconContainer = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1em;
`;

export default function Button({
  text,
  children,
  icon: Icon,         
  iconPosition = 'start',
  bgColor,
  color,
  borderColor,
  size = 'md',
  onClick,
  ...rest
}) {
  const { t } = useTranslation();

  return (
    <StyledButton
      $bgColor={bgColor}$color={color}
      $borderColor={borderColor}$size={size}
      onClick={onClick}
      {...rest}
    >
      {Icon && iconPosition === 'start' && (
        <IconContainer>
          <Icon />
        </IconContainer>
      )}

      <span>{text ? t(text) : children}</span>

      {Icon && iconPosition === 'end' && (
        <IconContainer>
          <Icon />
        </IconContainer>
      )}
    </StyledButton>
  );
}