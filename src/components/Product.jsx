import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
//assets
import plus from "../img/icon-plus.svg";
import minus from "../img/icon-minus.svg";
import useAddCart from "../hooks/useAddCart";
//styled
const ContainerDataMain = styled.main`
  @media (min-width: 1030px) {
    display: grid;
    grid-template-columns: 0.7fr 0.9fr;
    grid-template-rows: 1fr;
    grid-column-gap: 100px;
    grid-row-gap: 0px;
    align-items: center;
    margin: 5rem 15rem 0 15rem;
  }
`;
const ContainerImage = styled.div`
  position: relative;
`;

const Imgs = styled.img`
  @media (min-width: 1000px) {
    border-radius: 10px;
  }
`;
const ContainerRoll = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0 0 0;
`;
const ImgProduct = styled(Imgs)`
  max-width: 10rem;
  position: relative;
  &:hover {
    transition: ease-in-out 0.2s;
    filter: opacity(50%);
  }

  @media (max-width: 1350px) {
    width: 7rem;
  }
`;
const ContainerInfo = styled.div`
  padding: 1rem 2rem;
`;
const Span = styled.span`
  color: var(--orange);
  font-weight: var(--f-700);
  text-transform: uppercase;
  @media (min-width: 1030px) {
    font-size: 13px;
  }
`;
const SectionInfo = styled.section`
  margin: 1rem 0;
`;
const Title = styled.h1`
  font-size: 30px;
  color: var(--Very-Dark-blue);
  @media (min-width: 1030px) {
    font-size: 48px;
  }
`;
const InfoProduct = styled.p`
  margin: 1rem 0 0 0;
  color: var(--Dark-grayish-blue);
  line-height: 28px;
  font-size: 17px;
  @media (min-width: 1030px) {
    width: 80%;
  }
`;
const ContainerPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
  @media (min-width: 1030px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const PriceC = styled.div`
  display: flex;
  align-items: center;
`;
const PriceTotal = styled.p`
  font-size: 25px;
  color: var(--Very-Dark-blue);
  font-weight: var(--f-700);
  margin: 0 15px 0 0;
`;
const Desc = styled.span`
  padding: 5px 10px;
  border-radius: 8px;
  background-color: var(--pale-orange);
  color: var(--orange);
  font-weight: var(--f-700);
`;
const PriceDesc = styled.span`
  text-decoration: line-through;
  color: var(--Grayish-blue);
  font-weight: var(--f-700);
  @media (min-width: 1030px) {
    margin: 1rem 0;
  }
`;
const ContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1030px) {
    flex-direction: row;
    width: 80%;
  }
`;
const ContIncrement = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--Light-grayish-blue);
  width: var(--w-b);
  padding: var(--p-b);
  border-radius: var(--border-b);
  justify-content: space-between;
  margin: 0 0 1.5rem 0;
  @media (min-width: 1030px) {
    margin: 0 1.5rem 0 0;
    width: 55%;
  }
`;
const IconNegative = styled.img`
  cursor: pointer;
  &:hover {
    transition: ease-in-out 0.2s;
    filter: opacity(50%);
  }
`;
const DataItemI = styled.span`
  font-weight: var(--f-700);
  color: var(--Very-Dark-blue);
`;
const IconPlus = styled(IconNegative)``;
const ButtonAdd = styled.button`
  width: var(--w-b);
  padding: var(--p-b);
  border-radius: var(--border-b);
  border: none;
  background-color: var(--orange);
  color: var(--White);
  font-weight: var(--f-700);
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0px 2.8px 2.2px rgba(255, 125, 26, 0.02),
    0px 6.7px 5.3px rgba(255, 125, 26, 0.028),
    0px 12.5px 10px rgba(255, 125, 26, 0.035),
    0px 22.3px 17.9px rgba(255, 125, 26, 0.042),
    0px 41.8px 33.4px rgba(255, 125, 26, 0.05),
    0px 100px 80px rgba(255, 125, 26, 0.07);
  &:hover {
    transition: ease-in-out 0.2s;
    filter: opacity(50%);
  }
`;
const Product = ({
  imgContent,
  company,
  title,
  info,
  priceTotal,
  desc,
  priceDesc,
  itemAdd,
  producitem1,
  producitem2,
  producitem3,
  producitem4,
}) => {
  const { width } = useWindowDimensions();
  const [image, setImage] = useState(imgContent);
  const [data, setData] = useState("")
  const [add, setAdd] = useState(0)
  const addValue = ()=>{
    setAdd(add + 1)
  }
  const desValue = ()=>{
    setAdd(add - 1)
  }
  const addCart = () => {
    setData(title)
  }
  return (
    
    <ContainerDataMain>
      <ContainerImage>
        {width < 1000 ? (
          <Splide
            options={{
              drag: true,
              rewind: true,
            }}
          >
            <SplideSlide>
              <Imgs src={producitem1} alt="product" />
            </SplideSlide>
            <SplideSlide>
              <Imgs src={producitem2} alt="product" />
            </SplideSlide>
            <SplideSlide>
              <Imgs src={producitem3} alt="product" />
            </SplideSlide>
            <SplideSlide>
              <Imgs src={producitem4} alt="product" />
            </SplideSlide>
          </Splide>
        ) : (
          <Imgs src={image} alt="product" />
        )}
        {/*desktop*/}
        {width >= 1000 && (
          <ContainerRoll>
            <ImgProduct
              onClick={(e) => {
                setImage(producitem1);
              }}
              src={producitem1}
              alt="product"
            />
            <ImgProduct
              onClick={(e) => setImage(producitem2)}
              src={producitem2}
              alt="product"
            />
            <ImgProduct
              onClick={(e) => setImage(producitem3)}
              src={producitem3}
              alt="product"
            />
            <ImgProduct
              onClick={(e) => setImage(producitem4)}
              src={producitem4}
              alt="product"
            />
          </ContainerRoll>
        )}
      </ContainerImage>
      <ContainerInfo>
        <Span>{company}</Span>
        <SectionInfo>
          <Title>{title}</Title>
          <InfoProduct>{info}</InfoProduct>
        </SectionInfo>
        <ContainerPrice>
          <PriceC>
            <PriceTotal>${priceTotal}</PriceTotal>
            <Desc>{desc}%</Desc>
          </PriceC>
          <PriceDesc>${priceDesc}</PriceDesc>
        </ContainerPrice>
        {/*buttons*/}
        <ContainerButtons>
          <ContIncrement>
            <IconNegative onClick={desValue} src={minus} alt="minus" />
            <DataItemI>{add}</DataItemI>
            <IconPlus onClick={addValue} src={plus} alt="add" />
          </ContIncrement>
          <ButtonAdd onClick={addCart} >Add to cart</ButtonAdd>
        </ContainerButtons>
      </ContainerInfo>
    </ContainerDataMain>
  );
};

Product.propTypes = {
  imgContent: PropTypes.string,
  company: PropTypes.string,
  title: PropTypes.string,
  info: PropTypes.string,
  priceTotal: PropTypes.string,
  desc: PropTypes.number,
  PriceDesc: PropTypes.number,
  itemAdd: PropTypes.number,
  producitem1: PropTypes.string,
  producitem2: PropTypes.string,
  producitem3: PropTypes.string,
  producitem4: PropTypes.string,
};

export default Product;
