import { Contact } from '../Contact/Contact';
import s from './ContactList.module.css'


export const ContactList = ({items}, onDelete ) => {
  return (
    // <ul className={s.container}>s
      items.map(liItem => (
      <span key={liItem.id}>
      <Contact items={liItem} onDelete={onDelete}/>
      </span>
    ))
    // </ul>
  )
}
 
