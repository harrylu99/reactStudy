import React, { Component } from 'react'

const DetailData = [
    {id:'01', content:'Good Morning'},
    {id:'02', content:'Good Afternoon'},
    {id:'03', content:'Night night'},
]

export default class Detail extends Component {
    render() {
        // receive params 
        const {id,title} = this.props.match.params
        const findResult = DetailData.find((detailObj)=>{
            return detailObj.id === id
        })
        return (
            <ul>
                <li>ID:{id}</li>
                <li>Title:{title}</li>
                <li>Content:{findResult.content}</li>
            </ul>
        )
    }
}
