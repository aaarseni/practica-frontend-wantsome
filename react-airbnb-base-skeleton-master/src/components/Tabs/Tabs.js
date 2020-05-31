import React from "react";
import style from './Tabs.module.css';

const Tabs = () => {
    return (
        <div className={style.tabs}>
            <button>Dates</button>
            <button>Guests</button>
        </div>
        
    )
}

export default Tabs;