import React from 'react'
import { Link } from "gatsby"

import './Footer.css'

class Footer extends React.Component {
    render () {
        return(

            <div className="Footer">
                <div className="FooterGroup">
                    <div className="Menu">
                        <h1>Home</h1>
                        <Link to="/about">About</Link>
                    </div>

                    <div className="Menu">
                        <h1>Resources</h1>
                        <Link to="/yearlygoal">Yearly Goal</Link>
                        <Link to="/openstartup">Open Startup</Link>
                    </div>

                    <div className="Menu">
                        <h1>Other</h1>
                        <Link to="/page-2/">Terms of Service</Link>
                        <Link to="/page-2/">Privacy Policy</Link>
                    </div>
                </div>
                <p>
                Designed with Figma. Background maded with Figma.
                Website developed in React. © 2019
                </p>
            </div>
        )
    }
}

export default Footer