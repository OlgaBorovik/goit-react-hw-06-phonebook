import styled from "styled-components";

export const ContactBox = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;

`

export const Button = styled.button`
width: 80px;
height: 30px;
border-radius: 5px;
border:none;
background-color: lightblue;
font-size: 14px;
&:hover{
    background-color: blue;
    color: white;
}
`
export const Span = styled.span`
font-size: 16px;
font-weight: 700;
`