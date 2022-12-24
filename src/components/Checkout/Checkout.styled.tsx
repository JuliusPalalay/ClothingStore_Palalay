import styled from 'styled-components';

export const Title = styled.p`
  padding-left: 190px;
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom:  0;
`;


 
export const ProductsWrapper = styled.div`
  width: fit-content;
  background: white;
  background-image: linear-gradient(to bottom right,  whitesmoke,grey,black);
  border-radius:25px;
  color:white;
 
`;


export const Total = styled.div`
  display: flexbox;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120px;
  
  overflow: hidden;
  position: relative;
  margin-top: 10px;
  color:white;
`;

export const Labels = styled.div`
  display: block;
  gap: 10px;
  width: 225px;
  color:white;
  
`;

export const TotalAmountLabel = styled.p`
  display: flexbox;
  font-weight: bolder;
  font-style: normal;
  font-size: 20px;
  margin: 0;
  margin-bottom: 10px;
  margin-left: 0;
  color:white;
`;

export const TotalItemsLabel = styled.p`
  font-weight: normal;
  font-size: 15px;
  margin: 0;
  color:white;
`;


export const PriceContainer = styled.div`
  display: block;
  align-items: flex-end;
  gap: 10px;
  width: 225px;
  color:white;
  
`;

export const TotalAmount = styled.p`
  text-align: end;
  font-weight: bolder;
  font-style: normal;
  font-size: 20px;
  margin: 0;
  margin-top: 0;
  margin-bottom: 10px;
  margin-right: 0;
  color:white;
`;
