import React from 'react'
import { Link } from "gatsby"

import './Card.css'

class Card extends React.Component {
    render () {
        return(
            <div className="CardHeader">
                <h2> 1 startup, more coming </h2>
                
                <div className="CardGroup">

                    <Link to="/" className="Card">
                        <h1>Nomad Startup</h1>
                        <h3>$30, 416</h3>
                        <p>in May 2019</p>
                    </Link>

                </div>


            </div>
        )
    }
}

export default Card