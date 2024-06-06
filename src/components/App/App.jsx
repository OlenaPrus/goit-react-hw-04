import css from './App.module.css';
import initialContacts from '../../../data/contacts.json'; /*імпортуємо початкове значення стану*/

import { useEffect, useState } from 'react';

import ContactForm  from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';



export default function App() {

  const [contacts, setContacts] = useState(() => {
    const contactsFromLS = JSON.parse(localStorage.getItem('contacts')); /*початкове значення стану береться з LS, а якщо там пусто, то з initialContacts */

    return contactsFromLS || initialContacts;
  });
  const [search, setSearch] = useState('');

  function addContact (newContact) {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  function deleteContact (contactId) {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId); /*створено новий масив з елементів, ід яких не співпадає з введеним ід для видалення*/
    });
  };

  const filterContacts = contacts.filter(contact =>
  contact.name.toLowerCase().trim().includes(search.toLowerCase().trim())
  );
  
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts)); /*кожного разу, коли змінюється contacts, useEffect зберігає їх в локальне сховище.*/
  }, [contacts]);

  return (
    <div className={css.container}>      
      <h1>Phonebook</h1>
      
      <ContactForm addContact={addContact} />
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList filterContacts={filterContacts} onDelete={deleteContact} />
      
    </div>
  );
  
}
