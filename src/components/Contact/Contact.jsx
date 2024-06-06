import { FaPhoneAlt, FaUser } from "react-icons/fa";
import css from './Contact.module.css';


export default function Contact({ contact: { id, name, number }, onDelete }) {
   
  return (
    <li>
      <div className={css.listItem}>
        <div className={css.contactInfo}>
          <p className={css.page}>
          <FaUser className={css.icon} />
          {name}
        </p>
        <p className={css.page}>
          <FaPhoneAlt className={css.icon} />
          {number}
        </p>
        </div>
        <button className={css.btn} onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </li>
  );
}
