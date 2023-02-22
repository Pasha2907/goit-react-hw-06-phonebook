import styled from '@emotion/styled';

export const Form = styled.form`
  width: 300px;
  padding: 10px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #008b8b;
  border-radius: 3px;
  background-color: #20b2aa;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 200px;
  margin-top: 5px;
  border: 2px solid #008b8b;
  border-radius: 3px;
`;

export const Button = styled.button`
  width: 100px;
  text-transform: capitalize;
  cursor: pointer;
  border: 2px solid #008b8b;
  border-radius: 3px;
  background-color: white;
  transition: background-color 250ms ease;
  :active,
  :hover {
    background-color: #7b68ee;
  }
`;
