import React from "react";

const Dashboard = props => {
    return(
        <div>
            <button onClick={props.strikeCount}>Strike</button>
            <button onClick={props.ballCount}>Ball</button>
            <button onClick={props.fouls}>Foul</button>
            <button onClick={props.hits}>Hit</button>
        </div>
    )
}

export default Dashboard;