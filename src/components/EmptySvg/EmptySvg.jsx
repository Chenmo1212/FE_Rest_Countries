import React from 'react';
import './EmptySvg.css';

const EmptySvg = ({message = "Nothing found"}) => {
    return (
        <div className="empty">
            <div className="draw">
                <div className="cactus">
                    <div className="arm"></div>
                    <div className="arm"></div>
                </div>
                <div className="cactus">
                    <div className="arm"></div>
                    <div className="arm"></div>
                </div>
                <div className="cactus">
                    <div className="arm"></div>
                    <div className="arm"></div>
                </div>
                <div className="sky">
                    <div className="mountain"></div>
                    <div className="mountain two"></div>
                    <div className="sun"></div>
                </div>
            </div>
            <p className="no-items-text">{message}</p>
        </div>
    );
};

export default EmptySvg;