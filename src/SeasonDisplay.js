import "./SeasonDisplay.css"
import React from "react"

const seasonConfig = {
    summer:{
        text: "It's summer now. let's hit the beach",
        iconName: "sun"
    },
    winter:{
        text: "It's winter now and very chilly outside",
        iconName: "snowflake"
    }
}

const getSeason = (lat, month) => {
    const decision = lat > 0 ? 'summer' : 'winter';
    if(month > 2 && month < 9){
        return decision
    } 
    return decision
}

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth())
    console.log(season)
    const {text, iconName} = seasonConfig[season]
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}/>
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`}/>
        </div>
    )
}

export default SeasonDisplay