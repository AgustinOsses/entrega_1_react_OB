import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'

const ContactPure = ({contact}) => {
  return (
    <div>
        <h2>
            Nombre: { contact.name }
        </h2>
        <h3>
            Apellido: { contact.last_name }
        </h3>
        <h4>
            Email: { contact.email }
        </h4>
        <h5>
            { contact.conected ? 'Contacto En Línea' : 'Contacto No Disponible'}
        </h5>

    </div>
  )
}

ContactPure.propTypes = {
    contact: PropTypes.instanceOf(Contact)
}

export default ContactPure