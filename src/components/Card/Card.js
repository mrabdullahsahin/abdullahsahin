import React from 'react'
import { Link } from "gatsby"

import './Card.css'

class Card extends React.Component {
    render () {
        return(

            <div className="CardGroup">
                <div className="Card">
                    <image src='../../images/abdullahsahin.jpg'/>
                    <h3> Product Name </h3>
                    <p> Product Description </p>
                    <div className="Revenue">
                        <p> $30, 416 / Mon </p>
                    </div>
                </div>
            </div>
        )
    }
}