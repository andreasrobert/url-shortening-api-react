import React, { useState } from 'react';
import styled from 'styled-components';


const Container= styled.div`
  width: 815px;
  height: 55px;
  border-radius: 8px;
  background-color: white;
  margin-top: 13px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
`;

const Contain=styled.div`
display: flex;
justify-content: center;
`;


const Start = styled.div`
width: 75px;
height: 35px;
border-radius: 5px;
background-color: hsl(180, 66%, 49%);
color:white;
text-align: center;
line-height: 35px;
font-size: small;
font-weight: 700;
cursor: pointer;
margin-top: 5px;

&.true{
    background-color:hsl(257, 27%, 26%)!important;
}

`;

const Details = styled.p`
color:hsl(257, 27%, 26%);
font-size: small;
font-weight: 700;
cursor: pointer;

&#link{
    color:hsl(180, 66%, 49%);
    margin-right: 20px;
}

`;



function ShortedLink(props:{link:any}) {

    const[copyState, setCopyState] =useState(false)

    const copied = ()=>{
        setCopyState(true)
        setTimeout(() => {
            setCopyState(false)
        }, 2000);
    }

  return (
    <>
    <div>
      <Container>
      <Details>{props.link.originalLink}</Details>
      <Contain>
          <Details  id="link">{props.link.shortLink}</Details>
          <Start className={`${copyState}`} onClick={() => {navigator.clipboard.writeText(props.link.shortLink);copied()}}>{copyState ? 'Copied!' : 'Copy'}</Start>  

        </Contain>
      </Container>

      

    </div>

    </>
  );
}

export default ShortedLink;

