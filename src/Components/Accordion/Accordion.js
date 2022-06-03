import React from 'react'
import { useState } from 'react'

import './css/Accordion.css'
export default function Accordion(props) {
    const [visible, setVisible] = useState(false)
  return (
    <div className="accordion">
        <div className="accordion_heading">
            <div className="accordion_block" onClick={()=>setVisible(!visible)}>
                  <p>{props.title}</p>
                <span onClick={() => props.setActive(props.id)}>
                      {props.active === props.id? "^" : "˅"}
                </span>
            </div>
          </div>
        {visible && (<div className={(props.active === props.id ? "show" : " ") + "accordion_onContent"}>
            <div className="accordion_block">
                <p>
                    {props.text}
                </p>
            </div>
        </div>)}
    </div>
  )
}
