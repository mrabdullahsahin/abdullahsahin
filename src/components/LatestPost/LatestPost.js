import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import './LatestPost.css'
import Emoji from "../Emoji"

const LatestPost = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(
                sort: { fields: [frontmatter___date], order: DESC }
                ) {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    return (
        <div className="Posts">
            <h2> Latest Post </h2>

            <div className="PostLang"> 
                <h3><Emoji symbol="🇹🇷" label="Flag: Turkey"/> Turkish Post</h3>
                <h3><Emoji symbol="🇺🇸" label="Flag: USA"/> English Post</h3>
            </div>
            <div className="PostsGroup">
                {data.allMarkdownRemark.edges.map((edge) => {
                        return(
                            <li>
                                <Link to={`/blog/${edge.node.fields.slug}`} className="Post">
                                    <h1>{edge.node.frontmatter.title}</h1>
                                    <p>{edge.node.frontmatter.date}</p>
                                </Link>
                                <hr></hr>
                            </li>
                        )
                    })}
            </div>
        </div>
    )
}

export default LatestPost