import React, { useState } from "react";
import {
  BackCardContainer,
  BackgroundContainer,
  ButtonContainer,
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
  CompleteImageContainer,
  ErrorContainer,
  FormContainer,
  FrontCardContainer,
  LandingContainer,
  LandingSection,
  ThankYouContainer,
} from "./components";

import bg from "../../assets/bg-main-desktop.png";
import cardFront from "../../assets/bg-card-front.png";
import cardBack from "../../assets/bg-card-back.png";
import completeSvg from "../../assets/icon-complete.svg";

export const LandingPage = () => {
  const [cardHolder, setcardHolder] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardMonth, setCardMonth] = useState("");
  const [cardYear, setCardYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [errorHolder, setErrorHolder] = useState("");
  const [errorNumber, setErrorNumber] = useState("");
  const [errorDate, setErrorDate] = useState("");
  const [dataSaved, setDataSaved] = useState(false);

  function onChangeCardHolder(e) {
    console.log(e.target.value);
    setcardHolder(e.target.value);
  }

  function onChangeCardNumber(e) {
    setCardNumber(e.target.value);

    // console.log("123456789101112".replace(/(\d{4}(?!\s))/g, "$1 "));
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

  function onSubmitForm(event) {
    event.preventDefault();

    setErrorHolder("");
    setErrorNumber("");
    setErrorDate("");

    if (cardHolder === "") {
      setErrorHolder("Please complete field!");
    } else if (cardNumber === "") {
      setErrorNumber("Please complete field!");
    } else if (cardMonth === "" || cardYear === "" || cvc === "") {
      setErrorDate("Please complete all 3 fields!");
    } else {
      setDataSaved(true);
    }
  }

  function onClickButton(event) {
    onSubmitForm(event);
  }

  function onClickReload() {
    window.location.reload();
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
              <CardNumberSpan>{cardNumber.replace(/(\d{4}(?!\s))/g, "$1 ")}</CardNumberSpan>
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
          {dataSaved ? (
            <ThankYouContainer>
              <CompleteImageContainer>
                <img src={completeSvg} alt="" />
              </CompleteImageContainer>
              <h3>Thank You!</h3>
              <p>We've added your card details</p>
              <button onClick={onClickReload}>Continue</button>
            </ThankYouContainer>
          ) : (
            <form onSubmit={onSubmitForm}>
              <ClientDetails>
                <label htmlFor="">CARDHOLDER NAME</label>
                <input onChange={onChangeCardHolder} type="text" placeholder="e.g. John Smith" />
                <span style={{ color: "red" }}>{errorHolder}</span>
                <label htmlFor="">CARD NUMBER</label>
                <input onChange={onChangeCardNumber} type="number" placeholder="e.g. 1234 5678 9100 0000" />
                <span style={{ color: "red" }}>{errorNumber}</span>
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
                <ErrorContainer>
                  <span style={{ color: "red" }}>{errorDate}</span>
                </ErrorContainer>
              </CardDetails>
              <ButtonContainer>
                <button onClick={onClickButton}>Confirm</button>
              </ButtonContainer>
            </form>
          )}
        </FormContainer>
      </LandingContainer>
    </LandingSection>
  );
};
