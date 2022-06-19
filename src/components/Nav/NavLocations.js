import React from 'react';
import NavButton from './NavButton';

function NavLocations(props) {
    return (
        <section>
            <h2 className="nav__heading">Getaways</h2>
            <ul>   
                {
                    props.backgrounds.map((background, index) => {
                        return(
                            <li key={index}>
                                <NavButton value={background.title}
                                            buttonAction={props.setActiveBg}
                                            isActive={index === props.activeBg}
                                            disabled={background.premium}
                                            index={index} />
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    );
}

export default NavLocations;