import { ListContacts } from './Contacts.styled';
import { ContactsCard } from './Contacts.card';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/selectors';

export const ContactsList = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <ListContacts>
      <ContactsCard />
    </ListContacts>
  );
};
