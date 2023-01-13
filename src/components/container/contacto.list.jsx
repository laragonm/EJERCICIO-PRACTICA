import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ContactoListComponent(estadoP) {
    
    const [estado, setEstado] = useState(estadoP);
    
    return (
        <div>
            <h4>
                Estado: { estado === false ? 'Contacto En Línea':'Contacto No Disponible' }
            </h4>
            <div>
                <button onClick={() => setEstado(!estado)}>{estado === false ? 'Conectado' : 'Desconectado'}</button>
            </div>
        </div>
    );
};


ContactoListComponent.propTypes = {
    estadoP: PropTypes.bool,
};


export default ContactoListComponent;
