import React, {useEffect, useRef} from "react";
import Viewplayer from './Viewplayer/Viewplayer';
import Intro from './Intro/Intro';

function Main(props) {
    const mainElem =  useRef(null);
    const viewerActive = props.activeDancer >=0 && props.activeBg >=0;
    const mainContent = viewerActive ? <Viewplayer bg={props.bg} dancer={props.dancer}/> : <Intro />

    useEffect(() => {
        mainElem.current.style.setProperty('--height', `${props.headerHeight}px`);
    }, [props.headerHeight]);

    return (
        <main className={`main bordered ${viewerActive ? 'main--viewer-active' : ''}`} ref={mainElem}>
            {mainContent}
        </main>
    );
}

export default Main;