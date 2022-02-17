import React, { Component } from 'react';

class Counter extends Component {
    
    state = {
        count: 1,
        tags : ['test1', 'test2', 'test3']
    };

    styles = {
        fontSize : 100,
        fontWeight: 'bold'
    };
    constructor() {
        super();

        this.handlePlus = this.handlePlus.bind(this);
        this.handleMinus = this.handleMinus.bind(this);
    }

    renderTags() {
        if (this.state.tags.length === 0) return <p>there are no tags</p>;
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

    handlePlus(){
        this.setState({count: this.state.count +1});
        
    }
    handleMinus(){
        this.setState({count: this.state.count -1});
       
    }
    render() { 
        
        return (
        <div>
            {this.renderTags()}
            <h1 className='btn btn-primary m-2'>{this.state.count}</h1>
            <button onClick={this.handlePlus} className='btn btn-primary m-2'>Plus</button>
            <button onClick={this.handleMinus} className='btn btn-danger m-2'>Minus</button>
        </div>
        );
    }

}
 
export default Counter;