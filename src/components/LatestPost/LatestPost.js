import React from "react"
import './LatestPost.css'

const LatestPost = props => (
    <div className="LatestPost">
        <h1> {props.title} </h1>
        <p> {props.date} </p>
    </div>
)

export default LatestPost