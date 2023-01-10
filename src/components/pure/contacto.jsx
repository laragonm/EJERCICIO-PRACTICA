import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';


const ContactoComponent = ({ contacto }) => {
    return (
        <div>
            <h2>
                Nombre completo: { contacto.nombre } { contacto.apellido }
            </h2>
            <h3>
                Email: { contacto.email }
            </h3>
            <h4>
                Estado: { contacto.conectado ? 'Contacto En Línea':'Contacto No Disponible' }
            </h4>
            
        </div>
    );
};


ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ContactoComponent;
