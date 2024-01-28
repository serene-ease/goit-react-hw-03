import s from '../Contact/Contact.module.css';

export const Contact = ({ contact: { id, contactname, number }, eraseContact }) => {
  return (
    <div className={s.container}>
      <div>
        <p>{contactname}</p>
        <p>{number}</p>
      </div>
      <button onClick={() => eraseContact(id)}>Delete</button>
    </div>
  );
};
