import React, {useState} from 'react'
import {useSpring, animated} from 'react-spring'
import {colors, configA, initialDN} from './Props.jsx'

const calcHourO = (hourI, periodI) => {
    if(hourI === undefined || hourI === '') return -1

    let hour=parseInt(hourI)
    if(hour+'' !== hourI) return -2

    if(!(hour > 0 && hour <= 12)) return -3

    if(!periodI){
        if(hour !== 12) hour += 12
    }else{
        if(hour === 12) hour = 0
    }
    
    return hour
}

const calcMinuteO = minuteI => {
    if(minuteI === undefined || minuteI === '') return 12

    let minute = parseInt(minuteI)

    if(minute+'' !== minuteI) return -1

    if(!(minute >= 0 && minute <= 59)) return -1

    return minute
}

const calcDN = hourO => (hourO >= 8 && hourO <= 19) ? 1 : 0

export default function Input(props) {

    const [periodI, setPeriodI] = useState(false)
    const [hourI, setHourI] = useState('')
    const [DN, setDN] = useState(initialDN)

    const inputStyle = useSpring({
        background: colors[DN].light,
        color: colors[DN].dark,
        config: configA
    })

    const updateOutput = (localHourI, localPeriodI) =>{
        let localHourO = calcHourO(localHourI, localPeriodI)

        if(localHourO > -1){
            let localDN = calcDN(localHourO)

            if(localDN !== DN){
                console.log('updatedDN')
                setDN(localDN)
                props.giveDN(localDN)
            }
        }

        props.giveHourO(localHourO)
    }

    return (
        <>
            <div id="label12" className="hideM">12h system:</div>
            <div className="hideM"></div>
            <animated.input style={inputStyle} id="hourInput" type="text" maxLength="2" placeholder="12" onChange={(e) => {
                
                let localHourI = e.target.value

                updateOutput(localHourI, periodI)

                setHourI(localHourI)

            }} />
            <div id="dotsInput">:</div>
            <animated.input style={inputStyle} id="minuteInput" type="text" maxLength="2" placeholder="12" onChange={(e) => props.giveMinuteO(calcMinuteO(e.target.value))}/>
            <div id="timePeriod" onClick={() => {

                let localPeriodI = !periodI

                updateOutput(hourI, localPeriodI)

                setPeriodI(localPeriodI)

            }}>{(periodI) ? "AM" : "PM"}</div>
        </>
    )
}
