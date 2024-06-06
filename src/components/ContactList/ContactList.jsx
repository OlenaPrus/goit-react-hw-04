import css from './ContactList.module.css'

import Contact from '../Contact/Contact';

export default function ContactList({
    filterContacts = [],
    onDelete,
}) {
     return (
    <ul className={css.list}>
      {filterContacts.map(contact => {
        return (
          <Contact
            key={contact.id}
            contact={contact}
            onDelete={onDelete}
          />
        );
      })}
    </ul>
    );
   
}