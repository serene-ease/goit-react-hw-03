import { Contact } from '../Contact/Contact';
// import s from './ContactList.module.css'

export const ContactList = ({ contacts, eraseContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact contact={contact} eraseContact={eraseContact} />
        </li>
      ))}
    </ul>
  );
};
