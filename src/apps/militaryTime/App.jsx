import React, { useState } from 'react'
import "./style/root.css"
import Output from './components/Output.jsx'
import Input from './components/Input.jsx'
import Bg from './components/Bg.jsx'
import {useSpring, animated} from 'react-spring'
import {colors, configA, initialDN} from './components/Props.jsx'

export default function App() {
    const [DN, setDN] = useState(initialDN)
    const [hourO, setHourO] = useState(-1)
    const [minuteO, setMinuteO] = useState(12)

    const appStyle = useSpring({
        color: colors[DN].light,
        config: configA
    })

    const infoStyle = useSpring({
        color: colors[DN].dark,
        background: colors[DN].light,
        config: configA
    })

    return (
        <div id="container">

            <div id="app-container">
                <Bg DN = {DN} />

                <animated.div style={appStyle} id="app">
                    
                    <Input
                        giveHourO = { setHourO }
                        giveMinuteO = { setMinuteO }
                        giveDN = { setDN }
                    />
                    
                    <div id="bigEmpty"></div>
                    <div id="to" className="hideM">to</div>
                    
                    <Output
                        hourO = { hourO }
                        minuteO = { minuteO }
                        DN = { DN }
                    />

                </animated.div>
            </div>

            <animated.div style = {infoStyle} id="info">
                <h3>Military Time</h3>
                <p>You want to convert the time from a 12 hour clock to a 24 hour clock. If you are given the time on a 12 hour clock, you should output the time as it would appear on a 24 hour clock.</p>

                <p><b>Task:</b>  Determine if the time you are given is AM or PM, then convert that value to the way that it would appear.</p>
            </animated.div>

        </div>
    )
}