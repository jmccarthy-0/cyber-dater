import React, {useEffect, useState} from "react";
import Btn from "./Btn/Btn";

let audio;

function AudioBtn() {
    const [audioFile] = useState(`${process.env.PUBLIC_URL}/audio/Chill_ext.mp3`);
    const [isPlaying, setIsPlaying] = useState(false);

    // Mount
    useEffect(() => {
        audio = new Audio(audioFile);
        audio.loop = true;
    }, []);

    // Update
    useEffect(() => {
        isPlaying && audio.paused ?  audio.play() : audio.pause();
    }, [isPlaying]);

    const icon = isPlaying ? <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512.002 512.002" aria-hidden="true">
                                <g>
                                <g>
                                    <path d="M221.119,9.05L109.593,120.576H0v270.849h109.593l111.526,111.526h49.729V9.05H221.119z M223.052,437.29l-93.661-93.661
                                        H47.797V168.373h81.594l93.661-93.66V437.29z"/>
                                </g>
                                </g>
                                <g>
                                <g>
                                    <path d="M343.511,137.71l-33.797,33.797c46.589,46.591,46.589,122.398,0,168.987l33.797,33.797
                                        C408.736,309.067,408.736,202.935,343.511,137.71z"/>
                                </g>
                                </g>
                                <g>
                                <g>
                                    <path d="M428.005,53.216l-33.797,33.797c45.138,45.138,69.997,105.152,69.997,168.987s-24.859,123.85-69.997,168.987
                                        l33.797,33.797c54.167-54.165,83.997-126.182,83.997-202.785S482.172,107.381,428.005,53.216z"/>
                                </g>
                                </g>
                            </svg> : 
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" aria-hidden="true">
                                <g>
                                    <g>
                                        <path d="M218.911,11.516L108.499,121.928H0v268.144h108.499l110.412,110.412h49.233V11.516H218.911z M220.824,435.477
                                            l-92.726-92.726H47.32V169.246h80.779l92.726-92.724V435.477z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <polygon points="512,194.657 478.54,161.197 417.197,222.54 355.852,161.197 322.394,194.657 383.737,256 322.394,317.343 
                                            355.852,350.803 417.197,289.46 478.54,350.803 512,317.343 450.655,256 		"/>
                                    </g>
                                </g>
                            </svg>;

    

    return (
        <Btn handleClick={() => {setIsPlaying(!isPlaying)}}
            content={icon}
            classVal={''}
            label={isPlaying ? 'Pause' : 'Play'} />
    );
}

export default AudioBtn;