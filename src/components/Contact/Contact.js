import PropTypes from 'prop-types';
import { ContactBtn, ContactItem } from "./Contact.styled";

export const Contact = ({ name, number, id, deleteContact }) => {
  return (
    <ContactItem>
      <p>{name}</p>
      <p> {number} </p>
      <ContactBtn type="button" onClick={() => deleteContact(id)}>Delete</ContactBtn>
    </ContactItem>
  );
};


Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
}