import './InfoTooltip.css';
import closeIcon from '../../images/Close_Icon.svg';
import React from "react";

function InfoTooltip(props) {
    return (
        <div className={`popup ${props.isOpen ? `popup_is-opened`: ""}`} onClick={props.onCloseOnOverlay}>
            <div className="popup__container">
                <button className="popup__close" type="button" onClick={props.onClose}>
                    <img className="popup__close-image" src={closeIcon} alt="Иконка - закрыть" />
                </button>
                <img className="popup__image" src={props.image} alt={props.text} />
                <h2 className="popup__text">{props.text}</h2>
            </div>
        </div>
    )
}

export default InfoTooltip;
