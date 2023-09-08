import { nanoid } from "nanoid";
import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/contactList";
import { Filter } from "./Filter/Filter";

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: '',
  }
  addContact = dataContact => {
    const haveContactAlready = this.state.contacts.find(
      contact => contact.name === dataContact.name
    );

    if (haveContactAlready) {
      return alert(`${dataContact.name} is already in contacts`);
    }
    const newContact = {
      ...dataContact,
      id: nanoid(),
    };

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  inputFilter = ({ target: { value } }) => {
    this.setState({
      filter: value,
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    // const { contacts } = this.state;
    
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter />
        <ContactList contacts={this.state.contacts} filter={this.state.filter} onDeleteContact={this.deleteContact} />
      </div>
    )
  }
}