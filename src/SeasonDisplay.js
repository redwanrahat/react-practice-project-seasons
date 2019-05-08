import React from "react"

const seasonConfig = {
    summer:{
        text: "let's hit the beach",
        iconName: "sun"
    },
    winter:{
        text: "Burr, it's chilly",
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
        <div>
            <i className={`${iconName} icon`}/>
            <h1>{text}</h1>
            <i className={`${iconName} icon`}/>
        </div>
    )
}

export default SeasonDisplay