import { useState, useEffect } from 'react';
////////////////////////
import { ContactForm } from '../ContactForm/ContactForm.jsx';
import { ContactList } from '../ContactList/ContactList.jsx';
import { SearchBox } from '../SearchBox/SearchBox.jsx';
////////////////////////
import s from './App.module.css'
//for test array
import initialContacts from './testApp.json';

const recallContacts = () => {
  const savedContacts = window.localStorage.getItem('remembered-contacts');
  if ( savedContacts !== null ) return JSON.parse(savedContacts)
  return initialContacts
}

export const App = () => {
  const [contacts, setContacts] = useState(recallContacts);
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

    
  useEffect(() => {
    window.localStorage.setItem('remembered-contacts', JSON.stringify(contacts))
  }, [contacts])

  return (
    <div >
      <h1 className={s.headline}>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={contactsFilter} onChanging={setContactsFilter} />
      <ContactList contacts={actualContacts} eraseContact={eraseContact} />
    </div>
  );
};
