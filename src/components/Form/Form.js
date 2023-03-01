import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import { object, string, number } from 'yup';
import { StyledForm, Label, Input, FormBtn,} from "./Form.styled";


const schema = object().shape({
  name: string().required("It`s a required field"),
  number: number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .required('A phone number is required'),
});

const initialValues = {
  name: '',
  number: '',
};

export const AddContactForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={schema}
    >
      <StyledForm>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            placeholder="Insert name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          <ErrorMessage name="name" />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            placeholder="Insert number"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          <ErrorMessage name="number" className='error'/>
        </Label>
        <FormBtn type="submit">Add contact</FormBtn>
      </StyledForm>
    </Formik>
  );
};

AddContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
