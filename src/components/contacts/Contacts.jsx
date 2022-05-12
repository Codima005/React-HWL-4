import React, { useEffect, useState } from "react";
import {
  getContactsList,
  deleteContact,
  createContact,
} from "../../services/contactsService";
import { ContactsList } from "../contactsList/ContactsList";
import { ContactsForm } from "../contactsForm/ContactsForm";

export function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [page, setPage] = useState("home");

  useEffect(() => {
    getContactsList().then((data) => {
      setContacts(data);
    });
  }, []);

  const onDeleteButton = async (contact) => {
    await deleteContact(contact);
    getContactsList().then((data) => {
      setContacts(data);
    });
  };

  const onButtonClick = () => {
    setPage("form");
  };

  const onBtnSave = async (contact) => {
    await createContact(contact);
    getContactsList().then((data) => {
      setContacts(data);
      setPage("home");
    });
  };

  const onBtnCancel = () => {
    setPage("home");
  };

  return (
    <div>
      {page === "home" ? (
        <div>
          <table className="contactsTable">
            <thead>
              <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Phone number</th>
              </tr>
            </thead>
            <tbody>
              <ContactsList
                contacts={contacts}
                onDeleteButton={onDeleteButton}
              />
            </tbody>
          </table>
          <button onClick={onButtonClick}>Add new contact</button>
        </div>
      ) : (
        <>
          <ContactsForm onBtnSave={onBtnSave} onBtnCancel={onBtnCancel} />
        </>
      )}
    </div>
  );
}
