import { useId } from 'react';

export const SearchBox = ({ value, onChanging }) => {
  const cUserId = useId();
  return (
    <div>
      <label htmlFor={cUserId}>Find contacts by name</label>

      <input id={cUserId} type="text" name="contact" value={value} onChange={e => onChanging(e.target.value)} />
    </div>
  );
};
