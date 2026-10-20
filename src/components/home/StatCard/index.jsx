import { CardWrapper, StatNumber, StatLabel } from './styles';

export const StatCard = ({ number, label }) => {
  return (
    <CardWrapper>
      <StatNumber>{number}</StatNumber>
      <StatLabel>{label}</StatLabel>
    </CardWrapper>
  );
};