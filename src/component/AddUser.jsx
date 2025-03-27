import React, { Component } from 'react'
import {v4 as uuid} from "uuid"

export default class AddUser extends Component {
  
  state={
    id:"",
    name:"",
    email:"",
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.name===""||this.state.email==="")
    {
      alert("All the fields are mandotory");
      return;
    }
    this.state.id=uuid();
    this.props.addContactHandler(this.state);
    this.setState({name : "" , email : ""});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className='flex flex-col items-center justify-center gap-4'>
            <p><input placeholder='Enter name' value={this.state.name} onChange={(e)=> this.setState({name:e.target.value})} /></p>
            <p><input placeholder='Enter email' value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}} /></p>
            <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}
