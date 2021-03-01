import React from 'react';
import './Player.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Player = (props) => {
    const {image, name, salary, email} = props.player;

    return (
        <div className="player-info">
            <img src={image} alt=""/>
            <h2>Name: {name}</h2>
            <h5>Salary: ${salary}</h5>
            <button onClick={() => props.selectedPlayerHandler(props.player)}><FontAwesomeIcon icon={faUser} /><span>Add Player</span></button> 
        </div>
    );
};

export default Player;