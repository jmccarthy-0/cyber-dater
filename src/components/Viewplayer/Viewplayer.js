import {React} from 'react';
import Video from './Video';
import SmoochIcon from '../SmoochIcon/SmoochIcon';

import './Viewplayer.css'


function Viewplayer(props) {
    let figure = props.dancer.premium ? <img className="media" src={`${process.env.PUBLIC_URL}/img/dancers/${props.dancer.file}`} alt="" /> :
                                        <Video src={props.dancer.file} />;

    return (
        <div className="viewer">
            {figure}
            <img src={`${process.env.PUBLIC_URL}/img/locations/${props.bg.file}`} className={`bg-img ${props.bg.premium ? 'bg-img--is-locked' : ''}`} alt={props.bg.alt} />
            {props.dancer.premium && <div className='marquee'><p>Purchase More <strong><SmoochIcon />Smooch Tokens<SmoochIcon /></strong> to Unlock this <strong className='underline'>Lover!!!</strong></p></div>}
        </div>
    );
}

export default Viewplayer;