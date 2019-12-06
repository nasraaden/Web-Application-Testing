import React from "react";

const Display = props => {
    return(
        <div>
            <h2 data-testid="balls-number">{`Balls: ${props.balls}`}</h2>
            <h2 data-testid="strikes-number">{`Strikes: ${props.strikes}`}</h2>
            {/* <h2>{`Hits: ${props.hit}`}</h2>
            <h2>{`Fouls: ${props.foul}`}</h2> */}
        </div>
    )
}

export default Display;