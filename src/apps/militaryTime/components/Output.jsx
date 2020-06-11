import React from 'react'
import {useSpring, animated} from 'react-spring'
import {colors, configA} from './Props.jsx'

import Moon from './Moon.jsx'
import Sun from './Sun.jsx'

const renderOutput = (hourO, minuteO) => {
    if(minuteO > -1)
        if(hourO > -1){
            return(
                <>
                    <div id="hourOutput">{hourO}</div>
                    <div id="dotsOutput">:</div>
                    <div id="minuteOutput">{minuteO}</div>
                </>
            )
        }
        else if(hourO === -1) return(<div id="textO" className="alfred">Input, sir! ( ˇ෴ˇ )</div>)
    
    return(<div id="textO" class="alfred">Funny, sir! ( ￣෴￣ )</div>)
}

export default function Output(props) {
    const outputStyle = useSpring({
        backgroundColor: colors[props.DN].light,
        color: colors[props.DN].dark,
        config: configA
    })

    const shapeStyle = useSpring({
        fill: colors[props.DN].light,
        config: configA
    })

    return (
        <>
                <div id="label24" className="hideM">24h system:</div>
                <div className="hideM"></div>
                <animated.div style = {outputStyle} id="output">
                    {renderOutput(props.hourO, props.minuteO)}
                </animated.div>
                <animated.div style = {shapeStyle} id="shape">
                    {(!!props.DN) ? <Sun/> : <Moon/>}
                </animated.div>
        </>
    )
}
