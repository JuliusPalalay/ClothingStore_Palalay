import { useContext, useState } from "react";
import { Product } from "../../models";
import { CheckoutCard } from "../CheckoutCard";

import { ShopContext } from "../Context/useContext";
import { Labels, PriceContainer, ProductsWrapper, Title, Total, TotalAmount, TotalAmountLabel, TotalItems, TotalItemsLabel } from "./Checkout.styled";

export const Checkout = () => {
  const { products, total} = useContext(ShopContext);
 




  return (
    <>
    <Title>Checkout</Title>
    <ProductsWrapper>
        {products.map((product: Product, index) => (
          <CheckoutCard {...product} key={index} />
        ))}
      </ProductsWrapper>
      <Total>
      <Labels>
          <TotalAmountLabel>Total Amount:</TotalAmountLabel>
        </Labels>
        <PriceContainer>
          <TotalAmount>${total}.00</TotalAmount>
        </PriceContainer>
      </Total>

    </>
  );
};
