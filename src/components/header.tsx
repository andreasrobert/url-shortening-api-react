import React from 'react';
import styled from 'styled-components';
import logoImg from '../images/logo.svg'


const Container= styled.div`
  margin: 0 ;
  height: 95px;
  background-color: white;
  display: flex;
  align-items: center;
  
`;

const Logo = styled.image`
  background-image: url(${logoImg});
  background-repeat: no-repeat;
  height: 40px;
  min-width: 120px;
  margin-top: 10px;
  margin-left: 100px;
  margin-right: 12px;
`;

const Details = styled.p`
color:hsl(257, 7%, 63%);
margin-left: 28px;
font-size: small;
font-weight: 700;
cursor: pointer;
`;

const Auth = styled.div`
display: flex;
justify-content: flex-end;
width:100%;
margin-top: 12px;
`;

const SignUp= styled.p`
width: 100px;
height: 40px;
border-radius: 40px;
background-color: hsl(180, 66%, 49%);
color:white;
text-align: center;
line-height: 40px;
margin-top: 3px;
font-size: small;
margin-left: 35px;
margin-right: 100px;
font-weight: 700;
cursor: pointer;
`;


function Header(props: {handlePopUp:()=> void }) {

  return (
    <>
    <div id="go-up">
      <Container>
          <Logo></Logo>
        <Details  onClick={props.handlePopUp}>Features</Details>
        <Details  onClick={props.handlePopUp}>Pricing</Details>
        <Details onClick={props.handlePopUp}>Resources</Details>
        <Auth>
            <Details onClick={props.handlePopUp}>Login</Details>
            <SignUp onClick={props.handlePopUp}>Sign Up</SignUp>
        </Auth>
        

      </Container>

    </div>

    </>
  );
}

export default Header;