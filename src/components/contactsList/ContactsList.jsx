import React from "react";
import { ContactsListItem } from "../contactsListItem/ContactsListItem";

export function ContactsList(props) {
  return props.contacts.map((contact) => (
    <tr key={contact.id}>
      <ContactsListItem contact={contact} />
      <button onClick={() => props.onDeleteButton(contact.id)}>
        Delete contact
      </button>
    </tr>
  ));
}
