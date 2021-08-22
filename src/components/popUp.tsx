import styled, { keyframes } from "styled-components";
import cogImg from "../images/cog.svg";
import crossImg from "../images/cross.svg";

const Backgrounds = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  right: 0px;
`;

const Container = styled.div`
  background-color: white;
  z-index: 12;
  height: 400px;
  width: 500px;
  border-radius: 15px;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 50%;
  left: 50%;
  margin-top: -200px; /* Negative half of height. */
  margin-left: -250px; /* Negative half of width. */
`;

const rotateLeft = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const rotateRight = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(-360deg);
  }
`;

const Cross = styled.svg`
  width: 30px;
  height: 30px;
  background-image: url(${crossImg});
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  margin-top: 20px;
  margin-left: 430px;
  cursor: pointer;
`;

const Cog = styled.svg`
  width: 100px;
  height: 100px;
  background-image: url(${cogImg});
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-animation: ${rotateRight} 5s linear forwards infinite;
  -moz-animation: ${rotateRight} 5s linear forwards infinite;
  -o-animation: ${rotateRight} 5s linear forwards infinite;
  animation-play-state: running;
  position: absolute;

  &#one {
    margin-left: -120px;
    animation: ${rotateRight} 5s linear forwards infinite;
    margin-top: 115px;
  }

  &#two {
    margin-top: 45px;
    margin-right: -30px;
    animation: ${rotateLeft} 5s linear forwards infinite;
  }

  &#three {
    margin-left: 75px;
    margin-top: 145px;
    animation: ${rotateLeft} 5s linear forwards infinite;
  }

  &#one:hover {
    animation: ${rotateLeft} 3s linear forwards infinite !important;
  }

  &:hover {
    animation: ${rotateRight} 3s linear forwards infinite !important;
  }
`;

const Details = styled.p`
  color: hsl(257, 7%, 63%);
  font-size: 22px;
  font-weight: 400;
  margin-top: 275px;
  text-align: center;
`;

function PopUp(props: { handlePopUp: () => void; popUp: boolean }) {
  return (
    <>
      {props.popUp ? (
        <div>
          hello there
          <Backgrounds onClick={props.handlePopUp}></Backgrounds>
          <Container>
            <Cross onClick={props.handlePopUp}></Cross>
            <Cog id="one"></Cog>
            <Cog id="two"></Cog>
            <Cog id="three"></Cog>
            <Details>
              Sorry, this is just a demo
              <br />
              Not everything is functional
            </Details>
            <Details></Details>
          </Container>
        </div>
      ) : null}
    </>
  );
}

export default PopUp;
