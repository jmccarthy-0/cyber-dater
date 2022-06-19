import {React} from 'react';
import NavLocations from './NavLocations';
import NavDancers from './NavDancers';
import Btn from '../Btn/Btn';
import AudioBtn from '../AudioBtn';
import SmoochCredits from '../SmoochCredits';

import "./Nav.css"

function Nav(props) {
    return (
        <nav className={`nav bordered ${props.menuOpen ? 'nav--is-open' : ''}`}>
            <Btn handleClick={() => {props.setMenuOpen(false)}}
                content={'X'}
                classVal={'menu-btn nav__close-btn'} 
                label={'Close Menu'} />

            <div className='nav__top-bar'>
                <SmoochCredits />
                <AudioBtn />
            </div>
            
            <NavDancers dancers={props.dancers}
                        setActiveDancer={props.setActiveDancer}
                        activeDancer={props.activeDancer} />
            <NavLocations   backgrounds={props.backgrounds}
                            setActiveBg={props.setActiveBg}
                            activeBg={props.activeBg} />
        </nav>
    );
}

export default Nav;