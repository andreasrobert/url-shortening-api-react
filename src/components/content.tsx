import React from 'react';
import styled from 'styled-components';
import backImg from '../images/bg-shorten-desktop.svg';
import brandImg from '../images/icon-brand-recognition.svg';
import detailImg from '../images/icon-detailed-records.svg';
import fullyImg from '../images/icon-fully-customizable.svg';



function Content() {

const Container= styled.div`
  margin: 0;
  height: 740px;
  background-color: hsl(225, 33%, 95%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const InputContainer = styled.p`
width: 855px;
height: 130px;
border-radius: 7px;
background-color: hsl(257, 27%, 26%);
background-image: url(${backImg});
background-repeat: no-repeat;
background-size: contain;
color:white;
margin-top: -65px;
display: flex;
align-items: center;
justify-content: center;
`;

const ContainerText= styled.div`
  background-color: hsl(225, 33%, 95%);
  display: flex;
  flex-direction: column;
  max-width: 450px;

`;

const HeadLine = styled.p`
    color:hsl(260, 8%, 14%);
    font-weight: 700;
    
    &#header{
        font-size:xx-large;
        margin-top: 75px;
        text-align: center;
    }

    &#tab{
        font-size: larger;
        margin-top: 30px;
    }
`;

const Details = styled.p`
    color:hsl(0, 0%, 75%);
    &#header{
        font-size: smaller;
        font-weight: 700;
        margin-top: -27px;
        text-align: center;
    }
    &#tab{
        color: hsl(257, 7%, 63%);
        font-size:small;
        margin-top: -5px;
    }
`;

const Input= styled.input`
width: 500px;
height: 50px;
border-radius: 8px;
border:none !important;
font-size: large;
padding-left: 27px;
&:focus{
    outline:none;
}

`;

const Start = styled.p`
width: 130px;
height: 53px;
border-radius: 8px;
background-color: hsl(180, 66%, 49%);
color:white;
text-align: center;
line-height: 52px;
margin-left: 20px;
font-size: medium;
font-weight: 700;
cursor: pointer;
`;

const TabContainer = styled.div`
  height: 320px;
  margin: 0;
  background-color: hsl(225, 33%, 95%);
  display: flex;
  margin-top: 70px;

`;

const Tab= styled.div`
border-radius: 5px;
padding-left: 27px;
padding-right: 20px;
width: 247px;
height: 220px;
background-color: white;
display: flex;
flex-direction: column;
&#detail{
    margin-top: 42px;
}

&#fully{
    margin-top: 84px;
}
`;

const Circle = styled.div`
  width: 65px;
  height:65px;
  border-radius: 50%;
  background-color:hsl(257, 27%, 26%) ;
  margin-top: -35px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 30px;
  &#brand{
    background-image: url(${brandImg});}

  &#detail{
    background-image: url(${detailImg});}

  &#fully{
    background-image: url(${fullyImg});}
    
`;

const Lines = styled.div`
width: 25px;
height: 7px;
background-color: hsl(180, 66%, 49%);
margin-top: 128px;

`;


const onSubmit = () =>{
    let inputed="";
    const result = fetch('https://api.shrtco.de/v2/'+inputed,{
        mode:'cors',
        method:'POST'
    })
    return result;
}


  return (
    <>
    <div>
      <Container>
        <InputContainer id="content-div">
            <Input placeholder="Shorten a link here..."></Input>
            <Start onClick={onSubmit}>Shorten It!</Start>
        </InputContainer>

        <ContainerText>
            <HeadLine id="header">Advanced Statistics</HeadLine>
            <Details id="header">Track how your links are performin across the web with our advanced statistics dashboard.</Details>
        </ContainerText>

        <TabContainer>
            <Tab id="brand">
                <Circle id="brand"></Circle>
                <HeadLine id="tab">Brand Recognition</HeadLine>
                <Details id="tab">Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</Details>
            </Tab>
            <Lines></Lines>
            <Tab id="detail">
                <Circle id="detail"></Circle>
                <HeadLine id="tab">Detailed Records</HeadLine>
                <Details id="tab">Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</Details>
            </Tab>
            <Lines></Lines>
            <Tab id="fully">
                <Circle id="fully"></Circle>
                <HeadLine id="tab">Fully Customizable</HeadLine>
                <Details id="tab">Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</Details>
            </Tab>

        </TabContainer>
        
      </Container>

      

    </div>

    </>
  );
}

export default Content;

