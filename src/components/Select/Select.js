import React from 'react';
import './Select.css';

const Count = (props) => {
    const players = props.player;
    let budget = players.reduce((budget, player) => budget + parseInt(player.salary), 0);

    return (
        <div className="selected-plyer">
            <div className="total">
                <h5 className="total-player">Total Players Select: {players.length}</h5>
                <div className="total-budget">
                    <h5>Total Budget</h5>
                    <span>$ {budget}</span>
                </div>
            </div>

            <div>
                {
                    players.map(player => 
                        <div className="single-player">
                            <h5>Name: {player.name}</h5>
                            <p>Salary: {player.salary}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
    
};

export default Count;