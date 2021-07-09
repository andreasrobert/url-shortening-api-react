import React from 'react';
import styled from 'styled-components';
import footerImg from '../images/bg-boost-desktop.svg';
import logoImg from '../images/logo-white.svg';
import facebookImg from '../images/icon-facebook.svg';
import twitterImg from '../images/icon-twitter.svg';
import pinterestImg from '../images/icon-pinterest.svg';
import instagramImg from '../images/icon-instagram.svg';

const Container= styled.div`
  margin: 0 ;
  height: 589px;
  background-color: gray;
  display: flex;
  flex-direction:column;
`;

const Upper= styled.div`
  height: 264px;
  background-color: hsl(257, 27%, 26%);
  background-image: url(${footerImg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

const HeadLine = styled.p`
margin-top: 57px;
color:white;
font-weight: 700;
font-size: xx-large;
z-index: 3;
`;



const Start = styled.p`
width: 170px;
height: 45px;
border-radius: 40px;
background-color: hsl(180, 66%, 49%);
color:white;
text-align: center;
line-height: 45px;
margin-top: -8px;
font-size: large;
font-weight: 700;
cursor: pointer;
`;


const Downer = styled.div`
  background-color: hsl(260, 8%, 14%);
  padding-top: 60px;
  padding-left: 35px;
  height: 264px;
  display: flex;
  justify-content: center;

`;

const Logo = styled.image`
  background-image: url(${logoImg});
  background-repeat: no-repeat;
  height: 40px;
  min-width: 120px;
  margin-top: -2px;
  padding-right: 170px;
  cursor: pointer;
`;

const Images =styled.a`
background-image: url(${facebookImg});
background-repeat: no-repeat;
height: 30px;
width: 30px;
margin-left: 20px;
cursor: pointer;
&#facebook{
    background-image: url(${facebookImg});}

&#twitter{
    background-image: url(${twitterImg});}

&#pinterest{
    background-image: url(${pinterestImg});}

&#instagram{
    background-image: url(${instagramImg});
    }
`;

const DetailsStyle = styled.p`
color:hsl(257, 7%, 63%);
font-size: small;
font-weight: 500;
line-height: 2px;
cursor: pointer;

&#top{
    margin-top: 33px;
}
`;

const DetailsContainer = styled.div`
display: flex;
color:white;
font-weight: 700;
`;

const Features = styled.div`
display: flex;
flex-direction: column;
padding-right: 75px;
/* padding-left: 170px; */
`;

const Resource = styled.div`
display: flex;
flex-direction: column;
padding-right: 75px;
`;

const Company = styled.div`
display: flex;
flex-direction: column;
padding-right: 75px;

`;


function Footer({ handlePopUp }: { handlePopUp: () => void }) {
  const Details = (props: { id?: string; children: React.ReactNode }) => (
    <DetailsStyle onClick={handlePopUp} {...props} />
  )



  return (
    <>
    <div>
      <Container>
        <Upper>
            <HeadLine>Boost your links today</HeadLine>
            <Start onClick={() => {
              document.getElementById('content-div')?.scrollIntoView({ behavior: 'smooth'})
            }}>Get Started</Start>
        </Upper>

        <Downer>
            <Logo onClick={(el)=>{
                document.getElementById('go-up')?.scrollIntoView({ behavior: 'smooth'})
            }}></Logo>
            <DetailsContainer>
            <Features>Features
                <Details id="top">Link Shortening</Details>
                <Details>Branded Links</Details>
                <Details>Analytics</Details>
            </Features>
            <Resource>Resource
            <Details id="top">Blog</Details>
            <Details>Developers</Details>
            <Details>Support</Details>
            </Resource>
            
            <Company>Company
            <Details id="top">About</Details>
            <Details>Our Team</Details>
            <Details>Careers</Details>
            <Details>Contact</Details>
            </Company>

            <DetailsContainer>
            <Images id="facebook" href="https://www.facebook.com"/>
            <Images id="twitter" href="https://www.twitter.com"/>
            <Images id="pinterest" href="https://www.pinterest.com"/>
            <Images id="instagram" href="https://www.instagram.com"/>
            </DetailsContainer>

            </DetailsContainer>

            
            

        </Downer>

      </Container>
    </div>

    </>
  );
}

export default Footer;