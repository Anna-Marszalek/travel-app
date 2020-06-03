import React from 'react';
import ReactDOM from 'react-dom';
import './Notification.scss';

const Notification = () => {
    return ReactDOM.createPortal(<div className="notification">Test notification</div>, 
    document.getElementById('portal-root')
    );
};

export default Notification;