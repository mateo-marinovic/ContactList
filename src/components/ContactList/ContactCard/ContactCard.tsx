import { Contact, TContact } from "models/contact.model";
import "./ContactCard.css";
import ImageFrame from "components/ImageFrame/ImageFrame";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHeart,
  faPencil,
  faPhone,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import ContactsHttp from "http/contacts.http";

const ContactCard = ({ contact, _updateContacts, _deleteContacts }: Props) => {
  const {
    id,
    profilePicture,
    fullName,
    phoneNumber,
    emailAddress,
    isFavorite,
  } = contact;

  const contactsHttp = new ContactsHttp();

  const favoriteHandler = async () => {
    const newContact = await contactsHttp.updateContact({
      id,
      isFavorite: !isFavorite,
    });

    _updateContacts(newContact);
  };
  const deleteHandler = async () => {
    const newDelete = await contactsHttp.deleteContact({
      id,
    });

    _deleteContacts(id);
  };

  return (
    <>
      <div className="contact-card">
        <div className="icon">
          <FontAwesomeIcon
            size="lg"
            icon={faHeart}
            color={isFavorite ? "red" : "gray"}
            onClick={favoriteHandler}
          />
          <FontAwesomeIcon
            icon={faTrash}
            onClick={deleteHandler}
          />
        </div>

        <ImageFrame imageUrl={profilePicture}></ImageFrame>
        <h3>{fullName}</h3>
        <div>
          <div className="icon-inter">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>{emailAddress}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faPhone} />
            <span>{phoneNumber}</span>
          </div>
        </div>
      </div>
    </>
  );
};

type Props = {
  contact: Contact;
  _updateContacts: (contact: TContact) => void;
  _deleteContacts: (contact: any) => void;
};

export default ContactCard;
