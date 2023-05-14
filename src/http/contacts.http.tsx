import axios, { AxiosResponse } from "axios";
import { BASE_API_URL } from "constants/api.constants";
import HttpClient from "./generic.http";
import { Contact, TContact } from "models/contact.model";
import { formatSearchQuery } from "components/utils/generic.utils";

class ContactsHttp extends HttpClient {
  constructor() {
    super(BASE_API_URL);
  }

  public async getContacts(search = ""): Promise<any> {
    const { data }: AxiosResponse = await axios.get(this.Url("/contacts"));

    const contacts: Contact[] = data.map(
      (contact: TContact) => new Contact(contact)
    );

    console.log(search);

    return contacts.filter(({ fullName }) =>
      formatSearchQuery(fullName).includes(formatSearchQuery(search))
    );
  }

  public async updateContact({ id, ...contact }: any): Promise<Contact> {
    const { data } = await axios.patch(this.Url(`/contacts/${id}`), contact);
    return new Contact(data);
  }
  public async deleteContact({ id, ...contact }: any): Promise<Contact> {
    const { data } = await axios.delete(this.Url(`/contacts/${id}`), contact);
    return new Contact(data);
  }
}

export default ContactsHttp;
