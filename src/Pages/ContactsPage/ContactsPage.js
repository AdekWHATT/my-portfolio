import React from 'react';
import './ContactsPage.css';
import Header from '../../components/Header/Header';
import Contacts from '../../components/Contacts/Contacts';
const ContactsPage = () => {
  return (
    <div className='Contacts'>
      <Header />
      <Contacts />
    </div>
  )
}

export default ContactsPage;