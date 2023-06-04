import { ListItem, Delete } from './Contacts.styled';
import { useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/contacts/operations';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import {
  selectContacts,
  selectIsLoading,
  selectFilter,
} from '../../redux/selectors';
import 'react-toastify/dist/ReactToastify.css';

const notify = () =>
  toast.success('The contact has been deleted.', {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });

export const ContactsCard = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const filter = useSelector(selectFilter);
  
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return visibleContacts.map(({ name, id, number }) => {
    return (
      <ListItem key={id}>
        <p>{name}:</p>
        <p>{number}</p>
        <Delete
          type="button"
          onClick={() => {
            dispatch(deleteContact(id));
            if (!isLoading) {
              notify();
            }
          }}
        >
          Delete
        </Delete>
      </ListItem>
    );
  });
};
