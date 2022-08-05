import React from 'react';
import './StartButton.css';

/**
 * Props:
 * - disabled: boolean
 * - onClick: () => ()
 */
export default function StartButton(props) {
  return (
    <div className='boton-videochat'>
    <button
      className="btn btn-primary"
      disabled={props.disabled}
      onClick={props.onClick}
    >
      Entrar a llamada
    </button>
    </div>
  );
}
