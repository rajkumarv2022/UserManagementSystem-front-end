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
      <div className="flex items-center justify-center min-h-screen bg-gray-100 w-full">
      <div className='bg-white shadow-lg rounded-lg p-6 w-96 border border-gray-300'>
        <form onSubmit={this.handleSubmit} className='flex flex-col items-center justify-center gap-4'>
            <p><input placeholder='Enter name' value={this.state.name} onChange={(e)=> this.setState({name:e.target.value})} className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" /></p>
            <p><input placeholder='Enter email' value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}} className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" /></p>
            <button type='submit' className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-200" >Submit</button>
        </form>
      </div>
      </div>
    )
  }
}
