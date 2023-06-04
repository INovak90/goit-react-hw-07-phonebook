import { ContactForm } from './Form/Form';
import { ContactsList } from './Contacts/Contacts.list';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <Layout>
      <GlobalStyle />
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
      <ToastContainer />
    </Layout>
  );
};
