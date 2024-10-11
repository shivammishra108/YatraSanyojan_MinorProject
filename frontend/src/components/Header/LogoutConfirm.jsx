import React from 'react';
import './LogoutConfirm.css';

const LogoutConfirm = ({ isOpen, onClose, onConfirm, message }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3>Confirmation</h3>
                <p>{message}</p>
                <div className="modal-buttons">
                    <button className="btn confirm-btn" onClick={onConfirm}>Yes</button>
                    <button className="btn cancel-btn" onClick={onClose}>No</button>
                </div>
            </div>
        </div>
    );
};

export default LogoutConfirm;
