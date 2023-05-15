import ContactList from "components/ContactList/ContactList";
import Header from "components/Header/Header";
import Input from "components/Input/Input";
import NavMenu from "components/NavMenu/NavMenu";
import ContactsHttp from "http/contacts.http";
import { TContact } from "models/contact.model";
import { ChangeEvent, useEffect } from "react";
import { useState, useCallback, useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import { debounce } from "debounce";

function App() {
  const [contacts, setContacts] = useState([]);

  const navItems = [
    { name: "Contacts", path: "/contacts" },
    { name: "Favorites", path: "/favorites" },
  ];

  const inputHandler = debounce((event: ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value;

    fetchContacts(search);
    //console.log(1);
  }, 1000);

  const contactsHttp = useMemo(() => {
    console.log(1);
    return new ContactsHttp();
  }, []);

  const fetchContacts = useCallback(
    async (search?: string) => {
      const contacts = await contactsHttp.getContacts(search);

      setContacts(contacts);
      console.log(2);
    },
    [contactsHttp]
  );
  useEffect(() => {
    console.log(3);
    if (!fetchContacts) return;
    fetchContacts();
  }, [fetchContacts]);

  const _updateContacts = (contact: TContact) => {
    const newContacts: TContact[] = [];
    contacts.forEach((x) => {
      if (x.id === contact.id) {
        newContacts.push(contact);
      } else {
        newContacts.push(x);
      }
    });

    setContacts(newContacts);
  };

  const _deleteContacts = (id: number) => {
    const newArray = contacts.filter((x) => {
      return x.id !== id;
    });
    console.log(id);
    setContacts(newArray);
  };

  const contactPage = (isFavorites: boolean) => {
    const filteredContacts = isFavorites
      ? contacts.filter(({ isFavorite }) => isFavorite)
      : contacts;

    return (
      <>
        <ContactList
          arr={filteredContacts}
          _updateContacts={_updateContacts}
          _deleteContacts={_deleteContacts}
        ></ContactList>
      </>
    );
  };

  return (
    <>
      <Header title="Kontakt lis(ta"></Header>
      <Input
        onChange={inputHandler}
        type="text"
      />
      <NavMenu items={navItems}></NavMenu>
      <Routes>
        <Route
          path="/contacts"
          element={contactPage(false)}
        />
        <Route
          path="favorites/"
          element={contactPage(true)}
        />
      </Routes>
    </>
  );
}

export default App;
