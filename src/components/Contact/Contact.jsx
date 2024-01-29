import { FiPhone, FiUser } from "react-icons/fi";
import s from '../Contact/Contact.module.css';

export const Contact = ({ contact: { id, contactname, number }, eraseContact }) => {
  return (
    <div className={s.container}>
      <div>
        <p><FiUser className={s.icon} />{contactname}</p>
        <p><FiPhone className={s.icon} />{number}</p>
      </div>
      <button className={s.buttons} onClick={() => eraseContact(id)}>Delete</button>
    </div>
  );
};
