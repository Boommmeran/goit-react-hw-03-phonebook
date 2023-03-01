import { Component } from 'react';
import { nanoid } from 'nanoid';
import { AddContactForm } from './Form';
import { ContactsList } from './ContactsList';
import { Filter } from './FIlter';
import Notiflix from 'notiflix';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts))
    };
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');

    if (JSON.parse(contacts)) {
      this.setState({
        contacts: JSON.parse(contacts)
      });
    };
  };

  handleSubmit = (values, { resetForm }) => {
    const checkName = values.name;
    const findSameName = this.state.contacts.find(contact => contact.name === checkName);

    if (findSameName) {
      return Notiflix.Notify.failure('This person is already in your phone book');
    }
    this.setState(({ contacts }) => ({
      contacts: [{ id: nanoid(), name: values.name, number: values.number, }, ...contacts],
      
    }));
    resetForm();
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== contactId),
    }));
  };

  findContact = () => {
    const { filter, contacts } = this.state;
    const normalizedName = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedName)
    );
  };

  changeFilter = evt => {
    this.setState({
      filter: evt.currentTarget.value,
    });
  };

  render() {
    const { filter, number } = this.state;
    const { changeFilter, handleSubmit, deleteContact } = this;
    const visibleContacts = this.findContact();
    return (
      <div>
        <h1>Phone book</h1>
        <AddContactForm onSubmit={handleSubmit} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactsList contacts={visibleContacts} number={number} onDeleteContact={deleteContact} />
      </div>
    );
  };
};
