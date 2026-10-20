
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import 'swiper/css';
import 'swiper/css/pagination';

import { productsArray } from '../../../data/productsData';
import ProductCard from '../../ProductCard';

import {
  Section,
  HeaderWrapper,
  TitleGroup,
  Subtitle,
  MainTitle,
  Description,
  ViewAllButton,
  SwiperWrapper,
  NavButton,
  Container
} from './styles';

export default function TrendingProducts() {
  const { t } = useTranslation();
  const swiperRef = useRef(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <Section>
    <Container>
        <HeaderWrapper>
          <TitleGroup>
            <Subtitle>{t('products.subtitle', { defaultValue: 'HOT RIGHT NOW' })}</Subtitle>
            <MainTitle>{t('products.mainTitle', { defaultValue: 'Trending Products' })}</MainTitle>
            <Description>{t('products.description', { defaultValue: 'Our most popular tools and solutions, loved by teams around the world.' })}</Description>
          </TitleGroup>
          <ViewAllButton>{t('products.viewAll', { defaultValue: 'View All' })} &gt;</ViewAllButton>
        </HeaderWrapper>

        <SwiperWrapper>
          <NavButton
            $direction="left"
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={isBeginning}
            aria-label="Previous"
          >
            <FiChevronLeft />
          </NavButton>

          <Swiper
            modules={[Pagination]}
            spaceBetween={24}
            slidesPerView={3}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 16 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
          >
            {productsArray.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard
                  category={product.category}
                  rating={product.rating}
                  title={product.name}
                  description={product.description}
                  price={`$${product.price}`}
                  badgeText={product.badge}
                  onDetailsClick={() => console.log('Details ID:', product.id)}
                  onAddToCartClick={() => console.log('Add ID:', product.id)}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <NavButton
            $direction="right"
            onClick={() => swiperRef.current?.slideNext()}
            disabled={isEnd}
            aria-label="Next"
          >
            <FiChevronRight />
          </NavButton>
        </SwiperWrapper>
      </Container>
    </Section>
  );
}