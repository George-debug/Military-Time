import React from 'react'
import {useSprings, useSpring, animated} from 'react-spring'
import {bg, configA, ss} from './Props.jsx'

export default function Bg(props) {

    const bgStyle = useSpring({
        background: bg[props.DN],
        config: configA
    })

    const ssSprings = useSprings(6, ss.map(item => ({
        opacity: (props.DN === item.type) ? item.opacity : 0,
        config: configA
    })))

    return (
        <>
            <animated.div style={bgStyle} className="bg"></animated.div>
            {/*transitions.map(({item, props, key}) => <animated.div style={props} key={key} className = {item.class}></animated.div>)*/}
            {ssSprings.map((props, index) => <animated.div key = {ss[index].key} style = {props} className = {ss[index].class} ></animated.div>)}
        </>
    )
}
