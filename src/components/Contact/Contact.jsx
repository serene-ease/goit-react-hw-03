export const Contact = ({items:{ id, contactname, number }}, onDelete) => {
  return (
      <li>
        <p>{contactname}</p>
        <p>{number}</p>
        <button onClick={() => onDelete(id)}>Delete</button>
      </li>
      )

};
