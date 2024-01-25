import { useState } from 'react';
import contacts from './testApp.json';

export const App() => {
  return (
    <div>
      <h1>Phonebook</h1>
      {/* <ContactForm /> */}
      {/* <SearchBox /> */}
      <ContactList items={contacts} />
    </div>
  );
}
