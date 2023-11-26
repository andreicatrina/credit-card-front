import React, { useState } from "react";
import {
  BackCardContainer,
  BackgroundContainer,
  CardCvcSpan,
  CardDetails,
  CardDetailsInputs,
  CardDetailsLabels,
  CardHolderSpan,
  CardImagesContainer,
  CardMonthSpan,
  CardNumberSpan,
  CardYearSpan,
  ClientDetails,
  FormContainer,
  FrontCardContainer,
  LandingContainer,
  LandingSection,
} from "./components";
import bg from "../../assets/bg-main-desktop.png";
import cardFront from "../../assets/bg-card-front.png";
import cardBack from "../../assets/bg-card-back.png";

export const LandingPage = () => {
  const [cardHolder, setcardHolder] = useState("");
  const [cardNumber, setCardNumber] = useState();
  const [cardMonth, setCardMonth] = useState();
  const [cardYear, setCardYear] = useState();
  const [cvc, setCvc] = useState();

  function onChangeCardHolder(e) {
    console.log(e.target.value);
    setcardHolder(e.target.value);
  }

  function onChangeCardNumber(e) {
    setCardNumber(e.target.value);
  }

  function onChangeCardMonth(e) {
    setCardMonth(e.target.value);
  }

  function onChangeCardYear(e) {
    setCardYear(` / ${e.target.value}`);
  }

  function onChangeCvc(e) {
    setCvc(e.target.value);
  }

  return (
    <LandingSection>
      <LandingContainer>
        <BackgroundContainer>
          <img src={bg} alt="" />
          <CardImagesContainer>
            <FrontCardContainer>
              <img src={cardFront} alt="" />
              <CardHolderSpan>{cardHolder}</CardHolderSpan>
              <CardNumberSpan>{cardNumber}</CardNumberSpan>
              <CardMonthSpan>{cardMonth}</CardMonthSpan>
              <CardYearSpan>{cardYear}</CardYearSpan>
            </FrontCardContainer>
            <BackCardContainer>
              <img src={cardBack} alt="" />
              <CardCvcSpan>{cvc}</CardCvcSpan>
            </BackCardContainer>
          </CardImagesContainer>
        </BackgroundContainer>
        <FormContainer>
          <form action="">
            <ClientDetails>
              <label htmlFor="">CARDHOLDER NAME</label>
              <input onChange={onChangeCardHolder} type="text" placeholder="e.g. John Smith" />
              <label htmlFor="">CARD NUMBER</label>
              <input onChange={onChangeCardNumber} type="number" placeholder="e.g. 1234 5678 9100 0000" />
            </ClientDetails>
            <CardDetails>
              <CardDetailsLabels>
                <label htmlFor="">EXP. DATE (MM/YY)</label>
                <label htmlFor="">CVC</label>
              </CardDetailsLabels>
              <CardDetailsInputs>
                <input onChange={onChangeCardMonth} type="number" placeholder="MM" />
                <input onChange={onChangeCardYear} type="number" placeholder="YY" />
                <input onChange={onChangeCvc} type="number" placeholder="CVC" />
              </CardDetailsInputs>
            </CardDetails>
          </form>
        </FormContainer>
      </LandingContainer>
    </LandingSection>
  );
};
