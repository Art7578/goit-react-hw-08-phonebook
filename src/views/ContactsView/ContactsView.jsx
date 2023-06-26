import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import css from './ContactsView.module.css';

export default function ContactsView() {
  return (
    <div className={css.section}>
      <h1 className={css.title}>PHONEBOOK APP</h1>
      <h2>Add new contact</h2>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}