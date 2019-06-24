import React from "react"
import './LatestPost.css'

class LatestPost extends React.Component {
    render () {
        return(
            <div className="Posts">
                <h2> Latest Post </h2>
                <div className="PostsGroup">
                    <div className="Post">
                        <h1> My Test Post </h1>
                        <p> Jun 22, 2019 </p>
                    </div>
                    <hr/>
                    <div className="Post">
                        <h1> My Post </h1>
                        <p> Jun 21, 2019 </p>
                    </div>
                </div>
          </div>
        )
    }
}

export default LatestPost