import React from 'react'

import Emoji from '../Emoji'
import './YearlyGoal.css'

class YearlyGoal extends React.Component {
    render () {
        return(
            <div className="GoalTable">
                <h1>Personal Goals 2019</h1>
                <table>
                    <thead>
                        <th>Task</th>
                        <th>Progress</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Emoji symbol="🚀" label="Rocket"/> Launch Products</td>
                            <td>3/4</td>
                        </tr>
                        <tr>
                            <td><Emoji symbol="📚" label="Books"/> Books per year</td>
                            <td>10/15</td>
                        </tr>
                        <tr>
                            <td><Emoji symbol="💰" label="Money Bag"/> Earn $1k / month</td>
                            <td>82%</td>
                        </tr>
                        <tr>
                            <td><Emoji symbol="📝" label="Memo"/> Publish on blog</td>
                            <td>10/15</td>
                        </tr>
                    </tbody>
                </table>
        </div>
        )
    }
}

export default YearlyGoal