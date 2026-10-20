
import { useTranslation } from 'react-i18next';
import { FiStar, FiBox } from 'react-icons/fi';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import StatusBadge from '../status-badge'; 
import Button from '../common/buttons/CustomBtn'; 

import {
  CardWrapper,
  ImageContainer,
  BadgeWrapper,
  CardContent,
  MetaHeader,
  RatingBox,
  CardTitle,
  CardDesc,
  FooterRow,
  PriceBox,
  Price,
  PricePeriod,
  ButtonWrapper
} from './styles';

export default function ProductCard({
  category,
  rating,
  title,
  description,
  price,
  badgeText,
  onDetailsClick,
  onAddToCartClick
}) {
  const { t } = useTranslation();

  return (
    <CardWrapper>
      <ImageContainer>
        {badgeText && (
          <BadgeWrapper>
            <StatusBadge text={badgeText} />
          </BadgeWrapper>
        )}
        <FiBox />
      </ImageContainer>

      <CardContent>
        <MetaHeader>
          <span>{category}</span>
          <RatingBox>
            <FiStar style={{ fill: '#F59E0B' }} />
            <span>{rating}</span>
          </RatingBox>
        </MetaHeader>

        <CardTitle>{title}</CardTitle>
        <CardDesc>{description}</CardDesc>

        <FooterRow>
          <PriceBox>
            <Price>{price}</Price>
            <PricePeriod>{t('products.perMonth', { defaultValue: 'per month' })}</PricePeriod>
          </PriceBox>

          <ButtonWrapper>
            <Button
              text={t('products.details', { defaultValue: 'Details' })}
              bgColor="transparent"
              color="#0A192F"
              borderColor="#E2E8F0"
              size="sm"
              onClick={onDetailsClick}
            />
            <Button
              text={t('products.add', { defaultValue: 'Add' })}
              bgColor="#00E676"
              color="#0A192F"
              icon={AiOutlineShoppingCart}
              iconPosition="start"
              size="sm"
              onClick={onAddToCartClick}
            />
          </ButtonWrapper>
        </FooterRow>
      </CardContent>
    </CardWrapper>
  );
}