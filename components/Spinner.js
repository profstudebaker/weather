import styled, { keyframes } from "styled-components";

export default function Spinner() {
    return (
        <SpinnerWrapper />
    )
}

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerWrapper = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  
  border-top: 2px solid hsla(184, 100%, 100%, 0.52);
  border-right: 2px solid hsla(184, 100%, 100%, 0.52);
  border-bottom: 2px solid hsla(184, 100%, 100%, 0.52);
  border-left: 4px solid hsla(184, 100%, 100%, 1);
  background: transparent;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;
