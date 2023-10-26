import React from 'react';
import './ErrorHandle.css'

const ErrorHandle = ({message}) => {
    return (
        <>
            <div className="message">
                <p className="message-content" title={message}>{message}</p>
            </div>
        </>);
};

export default ErrorHandle;
