import React, { useState } from "react";

export function ContactsForm(props) {
  const [state, setState] = useState({
    name: "",
    surname: "",
    phone: "",
    id: "",
  });

  const getEmptyContact = () => {
    return {
      name: "",
      surname: "",
      phone: "",
      id: "",
    };
  };

  const onContactSave = (e) => {
    e.preventDefault();
    const newContact = {
      ...state,
    };

    props.onBtnSave(newContact);
    setState({ ...getEmptyContact() });
  };

  const onFormChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form>
        <label htmlFor="nameInput">Name</label>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={onFormChange}
        />
        <label htmlFor="surnameInput">Surname</label>
        <input
          type="text"
          name="surname"
          value={state.surname}
          onChange={onFormChange}
        />
        <label htmlFor="phoneInput">Phone</label>
        <input
          type="text"
          name="phone"
          value={state.phone}
          onChange={onFormChange}
        />
        <button onClick={onContactSave}>Save</button>
        <button onClick={props.onBtnCancel}>Сancel</button>
      </form>
    </div>
  );
}
