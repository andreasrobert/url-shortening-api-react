import React from 'react';
import styled from 'styled-components';
import backgroundImg from '../images/illustration-working.svg'

function Context() {

const Container= styled.div`
  margin: 0 ;
  height: 700px;
  background-color: white;
  display: flex;
  justify-content:space-between ;
`;

const ContainerText= styled.div`
  margin-left: 100px;
  height: 600px;
  background-color: white;
  display: flex;
  flex-direction: column;
  max-width: 600px;

`;

const ContainerImage= styled.div`
  display: flex;
  justify-content: flex-end;
  width:100%;
  background-color: white;
  
`;

const Logo = styled.image`
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  height: 485px;
  min-width: 600px;
  margin-top: 60px;
  /* position: absolute; */

`;

const HeadLine = styled.p`
margin-top: 135px;
color:hsl(260, 8%, 14%);
min-width: 450px;
font-weight: 700;
font-size: 75px;
z-index: 3;
line-height: 85px;

`;

const Details = styled.p`
color:hsl(257, 7%, 63%);
font-size: 22px;
font-weight: 400;
z-index: 3;
margin-top: -70px;
`;

const Start = styled.p`
width: 170px;
height: 45px;
border-radius: 40px;
background-color: hsl(180, 66%, 49%);
color:white;
text-align: center;
line-height: 45px;
margin-top: 10px;
font-size: large;
margin-right: 100px;
font-weight: 700;
cursor: pointer;
`;




  return (
    <>
    <div>
      <Container>
        <ContainerText>
            <HeadLine>More than just shorter links</HeadLine>
            <Details>Build your brand's recognition and get detailed insights on how your links are performing.</Details>
            <Start onClick={() => {
              document.getElementById('content-div')?.scrollIntoView({ behavior: 'smooth'})
            }}>Get Started</Start>
        </ContainerText>

        <ContainerImage>
            <Logo></Logo>
        </ContainerImage>

      </Container>
    </div>

    </>
  );
}

export default Context;