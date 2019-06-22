import React from 'react'
import { Link } from "gatsby"

import './Footer.css'

class Footer extends React.Component {
    render () {
        return(

            <div className="FooterGroup">
                <div className="Menu">
                    <h1>Home</h1>
                    <Link to="/page-2/">About</Link>
                    <Link to="/page-2/">Contact</Link>
                </div>

                <div className="Menu">
                    <h1>Resources</h1>
                    <Link to="/page-2/">Downloads</Link>
                    <Link to="/page-2/">Post</Link>
                </div>

                <div className="Menu">
                    <h1>Company</h1>
                    <Link to="/page-2/">Terms of Service</Link>
                    <Link to="/page-2/">Privacy Policy</Link>
                </div>
            </div>
        )
    }
}

export default Footer