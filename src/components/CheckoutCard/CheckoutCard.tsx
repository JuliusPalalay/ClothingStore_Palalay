import {
    ImgWrapper,
    Price,
    PriceContainer,
    SubTitle,
    TextContainer,
    Title,
    TotalAmount,
    Wrapper,
  } from './Checkoutcard.styled';
  
  import { Product } from '../../models';
  
  export const CheckoutCard = ({ name, imageUrl, price,quantity }: Product) => {
    
  
    return (
      <Wrapper>
        <ImgWrapper background={imageUrl}>
        </ImgWrapper>
        <TextContainer>
          <Title>{name}</Title>
          <SubTitle>Quantity: {quantity}</SubTitle>
        </TextContainer>
        <PriceContainer>
          <TotalAmount>${quantity * price}.00</TotalAmount>
          <Price> ${price}.00 per item</Price>
        </PriceContainer>
      </Wrapper>
    );
  };
  
  
  