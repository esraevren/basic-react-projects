import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function KisiEkle(props) {
  const [person, setPerson] = useState('');

  function handleChange(e) {
    setPerson(e.target.value);
  }

  function handleSubmit(e) {
    if (person !== '') {
      props.handleSubmit(person);
      setPerson('');
    }
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={person}
        onChange={handleChange}
        placeholder="isim girin"
      />
      <button type="submit">Ekle</button>
    </form>
  );
}

function KisiListele(props) {
  const arr = props.data;
  const listItems = arr.map((value, index) => <li key={index}>{value}</li>);
  return <ul>{listItems}</ul>;
}

function ContactYönetimi(props) {
  const [contacts, setContacts] = useState(props.data);

  function kisiEkleme(name) {
    setContacts([...contacts, name]);
  }

  return (
    <div>
      <KisiEkle handleSubmit={kisiEkleme} />
      <KisiListele data={contacts} />
    </div>
  );
}

const contacts = ['esra', 'emine', 'evren'];

ReactDOM.render(
  <ContactYönetimi data={contacts} />,
  document.getElementById('root')
);
