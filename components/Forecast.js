import styled from "styled-components"
import Spinner from "./Spinner"

export default function Forecast() {
    return <Wrapper>
        <Description>Sunny</Description>
        <Temp>80°F</Temp>
        <Location>Los Angeles, California</Location>
    </Wrapper>
}
const Wrapper = styled.div`
    height: 100%;
    border-radius: 10px;
    font-size: 2rem;
    line-height: .8;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    background-image: linear-gradient(
        340deg,
        hsl(217deg 77% 75%) 0%,
        hsl(218deg 77% 73%) 8%,
        hsl(219deg 78% 72%) 17%,
        hsl(219deg 78% 70%) 26%,
        hsl(220deg 78% 69%) 35%,
        hsl(220deg 78% 67%) 44%,
        hsl(221deg 78% 66%) 52%,
        hsl(222deg 77% 64%) 61%,
        hsl(223deg 77% 63%) 69%,
        hsl(224deg 76% 62%) 76%,
        hsl(225deg 75% 60%) 83%,
        hsl(226deg 74% 59%) 89%,
        hsl(227deg 72% 58%) 95%,
        hsl(229deg 71% 57%) 100%
      );
`

const Icon = styled.img`
   display: block;
   width: 20rem;
`
const Temp = styled.h2`
   font-size: 10rem;
   margin: 0;
`

const Description = styled.h2`
    marign: 0;
    font-weight: 300;
    letter-spacing: 2px;
    text-transform: uppercase;
`

const Location = styled.h2`
    marign: 0;
    font-weight: 300;
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: 2px;
    padding-top: 10px;
`