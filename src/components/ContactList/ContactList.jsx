import { Contact } from '../Contact/Contact';
import s from './ContactList.module.css'

export const ContactList = ({ contacts, eraseContact }) => {
  return (
    <ul className={s.list} >
      {contacts.map(contact => (
        <li className={s.listItem} key={contact.id}>
          <Contact contact={contact} eraseContact={eraseContact} />
        </li>
      ))}
    </ul>
  );
};
