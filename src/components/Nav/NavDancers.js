import React from "react";
import NavButton from "./NavButton";

function NavDancers(props) {
    return (
        <section>
            <h2 className="nav__heading">Partners</h2>
            <ul>
                {
                    props.dancers.map((dancer, index) => {
                        return (
                            <li key={index}>
                                <NavButton value={dancer.name}
                                            buttonAction={props.setActiveDancer}
                                            isActive={index === props.activeDancer}
                                            disabled={dancer.premium}
                                            nsfw={dancer.nsfw}
                                            cost={dancer.cost}
                                            index={index} />
                            </li>
                        );
                    })
                }
            </ul>
        </section>
    );
}

export default NavDancers;