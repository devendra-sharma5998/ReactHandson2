import React, { Component } from 'react'

export class App extends Component {

  state ={
  Name2:"",
  Department:"",
  Rating:"",
  employees :[]
}
  changeHandler =(e) =>{
this.setState({[e.target.name] : e.target.value});

  }


submitHandler = (e) =>
{
  console.log("submit Handler Called")
  const empObj =
  {
    Name :this.state.Name2,
    Department :this.state.Department,
    Rating : this.state.Rating,
  }
  const arr = this.state.employees;
  arr.push(empObj);
  this.setState({employees:arr})
  
}

  render() {
    return (
      
      <div>
        <h1 id='header'>Employee Feedback Form</h1>
        <form id='form'>
          <label htmlFor="Name">Name:  </label>
          <input id='input' type="text" name="Name2" value={this.state.Name} onChange={this.changeHandler}></input>
          <br /><br />
          <label htmlFor="Department">Department:  </label>
          <input id='input' type="text" name="Department" value={this.state.Department} onChange={this.changeHandler}></input>
          <br /><br />
          <label htmlFor="Rating">Rating:  </label>
          <input id='input' type="number" name="Rating" value={this.state.Rating} onChange={this.changeHandler}></input>
          <br /><br />
          <button id='button' style={{fontStyle:"italic"}} type='button' onClick={this.submitHandler}>Submit</button>

        </form>

        <div id='main-container'>
          {this.state.employees.map((value,index)=>
          {
            return(
              <span id='container'>
                
              <span id='boxes' style={{}} key={index}>Name| {value.Name},  Department| {value.Department},  Rating| {value.Rating}</span>
               </span>
            )
          }
          )}
        </div>

      </div>
    )
  }
}

 export default App 
