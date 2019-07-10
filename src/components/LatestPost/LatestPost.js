import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import './LatestPost.css'

const LatestPost = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
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