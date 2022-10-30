import React from "react";
import './header.css'

const IniHeader = () => {
    return (
        <>
            <div>
                <img
                    className='img-headers'
                    src='images/logo-kopra.png'
                    alt=''
                    style={{ width: 120, height: 70 }}
                    onClick={() => window.location.reload()}
                />
            </div>
        </>
    );
};

export default IniHeader;