import { useId } from 'react';
import s from './SearchBox.module.css'

export const SearchBox = ({ value, onChanging }) => {
  const cUserId = useId();
  return (
    <div className={s.container}>
      <label htmlFor={cUserId}>Find contacts by name</label>

      <input id={cUserId} type="text" name="contact" value={value} onChange={e => onChanging(e.target.value)} />
    </div>
  );
};
