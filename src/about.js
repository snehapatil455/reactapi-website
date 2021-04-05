import React from 'react';
class About extends React.Component{
    constructor()
    {   
        super();
        this.state={
            name:'sneha',
            age:18
        }
    }
    componentDidMount(){
        console.warn("did mount")
    }
    render(){
        return(
            <div>
            <h1>About us page</h1>
            <h2>{this.state.name}</h2>
            <button onClick = {() => {this.setState({name:'coco is back'})}}></button>
            </div>
        )
    }
}

export default About;