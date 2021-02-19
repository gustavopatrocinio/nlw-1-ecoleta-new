import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

import './confirmation.css';

const Confirmation = () => {
    return (
        <div id="confirmation">
            <div className="conteudo">
                <span className='icone'>
                    <FiCheckCircle className="icone-svg" />
                </span>
                <h1 className="done">Cadastro concluído.</h1>
            </div>
        </div>
    )
}

export default Confirmation;

