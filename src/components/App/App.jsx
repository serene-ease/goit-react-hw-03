import { useState } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { SearchBox } from '../SearchBox/SearchBox';

//for test array
import initialContacts from './testApp.json'


export const App = () => {
  const [contacts, setContacts] = useState(initialContacts);
  const [contactsFilter, setContactsFilter] = useState('');

  const eraseContact = contactId => {
    setContacts(prevContacts => {return prevContacts.filter(contact => contact.contactId !== contactId)}
      )
  };
  const actualContacts = contacts.filter(item => 
    item.contactname.toLowerCase().includes(contactsFilter.toLowerCase()))

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox value={contactsFilter} onChanging={setContactsFilter} />
      <ContactList contacts={actualContacts} eraseContact={eraseContact}/>
    </div>
  );
}
