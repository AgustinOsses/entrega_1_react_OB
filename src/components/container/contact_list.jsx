import ContactPure  from '../pure/contact';
import { Contact } from '../../models/contact.class';

const ContactList = () => {
    const defaultContact = new Contact('Juan', 'Perez', 'juanperez@gmail.com', false)

  return (
    <div>
        <ContactPure contact={defaultContact} />
    </div>
  )
}

export default ContactList