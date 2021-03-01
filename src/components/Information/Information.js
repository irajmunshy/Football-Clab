import React from 'react';
import './Information.css';
import {useState, useEffect} from 'react';
import Select from '../Select/Select';
import Player from '../Player/Player';
import 'bootstrap/dist/css/bootstrap.min.css';
import FakeData from '../../fakeData/data.json';


const Information = () => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        setPlayers(FakeData);
    }, []);

    const [player, setPlayer] = useState([]);
    const selectedPlayerHandler = (singlePlayer) => {
        if (player.find(pl => pl == singlePlayer)) {
            alert('The Element has been Selected.');
        } else {
            const newPlayer = [...player, singlePlayer];
            setPlayer(newPlayer);
        }
    }

    return (
        <div className="row">
            <div className="col-md-9 player-details">
                {
                    players.map(player => <Player
                        selectedPlayerHandler={selectedPlayerHandler}
                        player={player}></Player>)
                }
            </div>

            <div className="col-md-3">
                <Select player={player}></Select>
            </div>
        </div>
    );
};

export default Information;