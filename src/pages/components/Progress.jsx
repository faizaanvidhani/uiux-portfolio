import React, { useState, useEffect } from 'react';
import '../../css/components/Progress.css';

/**
 * https://www.w3schools.com/howto/howto_js_scroll_indicator.asp
 * https://webomnizz.com/how-to-display-progress-bar-on-page-scroll-with-reactjs/
 */
export default function Progress(props) {
    // TODO: IMPLEMENT PROGRESS BAR
    // const [scroll, setScroll] = useState(0);
    // useEffect(() => {
    //     let progressBarHandler = () => { 
    //         const totalScroll = document.documentElement.scrollTop;
    //         const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    //         const scroll = `${totalScroll / windowHeight}`;
    //         setScroll(scroll);
    //     }

    //     window.addEventListener("scroll", progressBarHandler);

    //     return () => window.removeEventListener("scroll", progressBarHandler);
    // });

    return (
        <div className="progress-container">
            <div className="progress-bar" id="myBar" style={{transform: `scale(${props.scroll}, 1)`, opacity: `${props.scroll}`}}></div>
        </div>
    )
}