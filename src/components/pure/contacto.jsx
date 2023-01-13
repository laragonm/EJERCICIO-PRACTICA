import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';
import ContactoListComponent from '../container/contacto.list';


const ContactoComponent = ({ contacto }) => {

    return (
        <div>
            <h2>
                Nombre completo: { contacto.nombre } { contacto.apellido }
            </h2>
            <h3>
                Email: { contacto.email }
            </h3>
            <ContactoListComponent estado={true}></ContactoListComponent>
        </div>
    );
};


ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ContactoComponent;
