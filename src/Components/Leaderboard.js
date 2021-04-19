import React, { Component } from 'react'
import axios from 'axios'
import ReactTable from "react-table";
import 'react-table/react-table.css'

const columns = [
    {
        Header: 'Name',
        accessor: 'name',
        
    },
    {
        Header: 'Score',
        accessor: 'score'
    }
]
    
const defaultSorted = [
    {
        id: "score",
        desc: true
    }
]

class Leaderboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            players: [{
                name: '',
                score: 0
            }],
            loading: true
        }
    }

    async getUsersData() {
        const res = await axios.get('https://qo5ij7uikd.execute-api.us-east-2.amazonaws.com/production/leaderboard')
        this.setState({ loading: false, players: res.data })
    }
    componentDidMount() {
        this.getUsersData()
    }

    render() {
        return (
            <div>
                <h5 style={{color: "blacks"}}>Scoreboard</h5>
                <ReactTable style={{height: "400px"}} data={this.state.players} columns={columns} defaultSorted={defaultSorted} className="-striped -highlight" paginationStyle={{color: "black"}} />
            </div>
        )
    }
}

export default Leaderboard