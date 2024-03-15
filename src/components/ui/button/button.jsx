import React from 'react';
import './button.css'; // Importa el archivo CSS correctamente

export function Button({ content, customClass }) {
    return (
        <button id='customClass' className={`button ${customClass}`}> 
            <span className="button-text">{content}</span>
        </button>
    );
}
