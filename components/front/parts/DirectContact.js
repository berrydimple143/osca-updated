import React from 'react';
import { Tooltip } from 'antd';

const DirectContact = ({ buttonClass, btnType, title, icon, onClick }) => {
    return (
        <Tooltip title={`${title}`} placement="top">
            { btnType === "call" && (
                <a href="tel:+639063091425"><button onClick={onClick} className={`${buttonClass}`}>{ icon }</button></a>
            )}
            { btnType === "chat" && (
                <button onClick={onClick} className={`${buttonClass}`}>{ icon }</button>
            )}
        </Tooltip>
    );
}

export default DirectContact;

