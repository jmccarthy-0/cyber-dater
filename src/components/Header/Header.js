import React, {useEffect, useRef} from "react";
import Btn from "../Btn/Btn";

import "./Header.css";

function Header(props) {
    const headerElem = useRef(null);

    const menuIcon = <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 270.79198 249.11758"
                        version="1.1">
                            <g
                                transform="translate(-164.991,-200.04762)">
                                <g
                                    transform="matrix(4.8104881,0,0,4.1794047,3.2672039,110.24893)">
                                <rect
                                    width="56.292"
                                    height="10.118"
                                    x="33.618999"
                                    y="21.486" />
                                <rect
                                    width="56.292"
                                    height="10.118"
                                    x="33.618999"
                                    y="46.159" />
                                <rect
                                    width="56.292"
                                    height="10.117"
                                    x="33.618999"
                                    y="70.974998" />
                                </g>
                            </g>
                        </svg>

    useEffect(() => {
        props.setHeaderHeight(headerElem.current.offsetHeight);
    }, []);


    return ( 
        <header className="header" ref={headerElem}>
            <img className="header__title-img" src="/img/glitter_txt.gif" alt="Cyber-Dater" />
            <Btn handleClick={() => {props.setMenuOpen(true)}} 
                content={menuIcon}
                classVal={'menu-btn'} />
        </header>
    );
}

export default Header;