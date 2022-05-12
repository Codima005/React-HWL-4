import React from "react";

export function ContactsListItem(props) {
  const contact = props.contact;
  return (
    <>
      <td>{contact.name}</td>
      <td>{contact.surname}</td>
      <td>{contact.phone}</td>
    </>
  );
}
