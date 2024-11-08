import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox, faX } from '@fortawesome/free-solid-svg-icons';
import './app.css';

function Tooltip({ color }) {
    const tooltipStyle = {
        '--tooltip-bg-color': color
    };

    return (
        <div className="tool-tip" style={tooltipStyle}>
            <div className="tool-tip-header">
                <FontAwesomeIcon icon={faInbox} className="inbox" />
                <h3>Archive Notes</h3>
                <FontAwesomeIcon icon={faX} className="x" />
            </div>
            <p className="tooltip-desc">A tooltip is a small, informative message <br /> that appears when a user hovers over or <br /> clicks on an element.</p>
        </div>
    );
}

export default Tooltip;

