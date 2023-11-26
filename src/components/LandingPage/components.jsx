import { styled } from "styled-components";

export const LandingSection = styled.section`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background-color: var(--white);
`;

export const LandingContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`;

export const BackgroundContainer = styled.div`
  width: 40%;
  min-height: 100vh;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 60%;
  padding: 0 24px;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 360px;
    gap: 24px;
  }
`;

export const ClientDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 360px;

  label {
    font-size: 16px;
    font-weight: 600;
  }

  input {
    width: 100%;
    max-width: 360px;
    height: 40px;
    border: 1px solid var(--veryDarkViolet);
    border-radius: 8px;
    padding: 0 8px 0;
    font-size: 16px;
    font-weight: 600;
  }
`;

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const CardDetailsLabels = styled.div`
  display: flex;
  gap: 36px;
  label {
    font-size: 16px;
    font-weight: 600;
  }
`;

export const CardDetailsInputs = styled.div`
  display: flex;
  gap: 12px;

  input {
    width: 100%;
    max-width: 80px;
    height: 40px;
    border-radius: 8px;
    border: 1px solid var(--veryDarkViolet);
    font-size: 16px;
    font-weight: 600;
    padding: 0 8px 0;
  }
`;

export const CardImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  width: 100%;
  max-width: 600px;
  height: 600px;
  position: absolute;
  top: 20%;
  left: 50%;

  img {
    width: 80%;
    height: 240px;
    border-radius: 12px;
  }
`;

export const FrontCardContainer = styled.div`
  position: relative;
`;

export const CardHolderSpan = styled.span`
  position: absolute;
  top: 180px;
  left: 50px;
  color: var(--white);
  font-size: 18px;
  text-transform: uppercase;
`;

export const CardNumberSpan = styled.span`
  position: absolute;
  top: 140px;
  left: 50px;
  color: var(--white);
  font-size: 24px;
  text-transform: uppercase;
`;

export const CardMonthSpan = styled.span`
  position: absolute;
  top: 180px;
  left: 350px;
  color: var(--white);
  font-size: 18px;
  text-transform: uppercase;
`;
export const CardYearSpan = styled.span`
  position: absolute;
  top: 180px;
  left: 370px;
  color: var(--white);
  font-size: 18px;
  text-transform: uppercase;
`;

export const BackCardContainer = styled.div`
  position: relative;
`;

export const CardCvcSpan = styled.span`
  position: absolute;
  top: 108px;
  left: 380px;
  color: var(--white);
  font-size: 18px;
  text-transform: uppercase;
`;
