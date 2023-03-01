import styled from '@emotion/styled';
import {Form, Field} from 'formik';

export const StyledForm = styled(Form)`
  border: 2px solid black;
  padding: 20px 20px;
  width: 350px;
`;

export const Label = styled.label`
  display: block;
  margin-top: 10px;
  font-size: 18px;
  font-weight: 500;
`;

export const Input = styled(Field)`
  display: block;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const FormBtn = styled.button`
  border-radius: 10px;
  margin-top: 10px;
  background-color: white;
  border: 2px solid gray;
  padding: 10px;
`;