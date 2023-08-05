// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
`
export const Heading = styled.h1`
  color: #1e293b;
  margin-top: 30px;
  font-family: 'Roboto';
`
export const Para = styled.p`
  color: #334155;
  margin-bottom: 30px;
  margin-top: 10px;
  width: 500px;
  text-align: ${props => props.align};
`
export const CustomImg = styled.img`
  height: 300px;
`
export const Button = styled.button`
  background-color: #1f81ff;
  color: #ffffff;
  border-style: none;
  cursor: pointer;
  border-radius: 7px;
  width: 120px;
  height: 40px;
`
