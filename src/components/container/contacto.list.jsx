import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';
import ContactoComponent from '../pure/contacto';


const ContactoListComponent = () => {

    const defaultContact = new Contacto('Luis', 'Aragon', 'luisaragmor@gmail.com', true);
    
    return (
        <div>
            <div>
                <h1>Tu contacto:</h1>
            </div>
            <ContactoComponent contacto={defaultContact}></ContactoComponent>
        </div>
    );
};


ContactoListComponent.propTypes = {

};


export default ContactoListComponent;
