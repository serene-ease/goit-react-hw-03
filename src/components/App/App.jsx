import { useState } from 'react';
////////////////////////
import { ContactForm } from '../ContactForm/ContactForm.jsx';
import { ContactList } from '../ContactList/ContactList.jsx';
import { SearchBox } from '../SearchBox/SearchBox.jsx';
////////////////////////
//for test array
import initialContacts from './testApp.json';

export const App = () => {
  const [contacts, setContacts] = useState(initialContacts);
  const [contactsFilter, setContactsFilter] = useState('');

  const addContact = newContact => {
    setContacts(prevContacts => {
        return [...prevContacts, newContact];
      }
    );
  };

  const eraseContact = id => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== id);
    });
  };

  const actualContacts = contacts.filter(item =>
    item.contactname.toLowerCase().includes(contactsFilter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={contactsFilter} onChanging={setContactsFilter} />
      <ContactList contacts={actualContacts} eraseContact={eraseContact} />
    </div>
  );
};
