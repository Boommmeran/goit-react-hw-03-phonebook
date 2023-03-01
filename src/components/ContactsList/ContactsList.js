import PropTypes, { object } from 'prop-types';
import { Contact } from '../Contact';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            deleteContact={onDeleteContact}
          />
        );
      })}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(object).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
