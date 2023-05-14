import { Contact, TContact } from "models/contact.model";
import ContactCard from "./ContactCard/ContactCard";
import "./ContactList.css";
const ContactList = ({ arr, _updateContacts }: Props) => {
  const content = arr.map((item: Contact, index: number) => {
    return (
      <ContactCard
        key={index}
        contact={new Contact(item)}
        _updateContacts={_updateContacts}
      ></ContactCard>
    );
  });

  return (
    <>
      <ul className="contact-list">{content}</ul>
    </>
  );
};

type Props = { arr: TContact[]; _updateContacts: (contact: TContact) => void };

export default ContactList;
