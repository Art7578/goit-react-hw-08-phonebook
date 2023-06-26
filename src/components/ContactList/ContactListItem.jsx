import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'services/contactsApi';
import css from './ContactList.module.css';

const ContactListItem = ({ id, name, number }) => {
  const [deleteContact] = useDeleteContactMutation();
  return (
    <>
      <li className={css.item} key={id}>
        <span className={css.text}>
          {name}: {number}
        </span>
        <button
          className={css.button}
          onClick={() => deleteContact(id)}
        >
          Delete
        </button>
      </li>
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;