import { useState } from 'react';
import {ContactList} from '../ContactList/ContactList';
import initialContacts from './testApp.json'


export const App = () => {
  const [contacts, setContacts] = useState(initialContacts);

  const eraseContact = contactId => {
    setContacts(prevContacts => {return prevContacts.filter(contact => contact.id !== contactId)}
      )
  };

  // const actualContacts = () => {contacts.filter(contact => contact.contactname.toLowerCase().includes())}

  return (
    <div>
      <h1>Phonebook</h1>
      {/* <ContactForm /> */}
      {/* <SearchBox /> */}
      <ContactList items={initialContacts} onDelete={eraseContact}/>
    </div>
  );
}
