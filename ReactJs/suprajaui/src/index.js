import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

/*function sample()
{
  return <h1>Welcome to the React Application</h1>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(sample());*/

//Basic Rendering

/*const App=()=>{
  return(
    <div>
      <h1>This is Hello World</h1>
      <p>This is Paragraph</p>
    </div>
  )
}
const r1=document.getElementById('root')
const root=ReactDOM.createRoot(r1)
root.render(<App/>)*/

//Dynamic Rendering Concepts

/*const App=()=>{
  const username="mohamed";
  return(
    <div>
      <h1>Hello {username}</h1>
      <p>{new Date().toLocaleDateString()}</p>
    </div>
  )
}

const r1=document.getElementById("root")
const root=ReactDOM.createRoot(r1)
root.render(<App/>)*/

//With JSX

// const myelem=<h1>Welcome to the JSX</h1>
// const root=ReactDOM.createRoot(document.getElementById('root'))
// root.render(myelem)

//With out JSX

/*const myelem=React.createElement('h1',null,'Welcome to the App')
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(myelem)*/

//React List
/*const myelem1=()=>(
  <div>
    <ul>
      <li>list1</li>
      <li>list2</li>
      <li>list3</li>
      <li>list4</li>
    </ul>
  </div>
)
const r=ReactDOM.createRoot(document.getElementById('root'));
r.render(myelem1())*/

//Fragmenting

/*import './index.css';
const App=()=>{
  return (
    <>
       <form>
        <label>UserName</label>
        <input type='text'/>
        <label>Password</label>
        <input type='password'/>
        <input type='submit' value='Login'/>
       </form>
    </>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(App());*/

//Conditional Rendering

/*const x=1
let text="hello"
if(x<5){
  text=`${text} world`
}else if(x==5){
  text=`Hello ${text}`
}else{
   text=`Goodbye ${text}`
}
console.log(text);
const myelem=()=>{
  return(
    <div>
    <h2>{text}</h2>
    </div>
   
  )
}
//Render based on props
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(myelem())*/

//Class Component

/*class Sample extends React.Component
{
  render(){
    return(
      <div>
        <h1>Welcome to the class component</h1>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//Function Component with arguments

/*function Sample(props)
{
  return(
    <>
      <h1>Welcome to the function arguments</h1>
      <p>{props.name}</p>
      <p>{props.age}</p>
    </>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample name={"John"} age={34}/>)*/

//Component in Component
/*function Sample()
{
  return(
    <h1>This is FirstComponent`</h1>
  )
}
function Sample2()
{
  return(
    <>
    <h2>This is Second Component</h2>
    <Sample />
    </>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample2 />)*/

//Component in file or importing and exporting the file

/*import Sample from './App'

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample />)*/

//Component Constructor

/*class Sample extends React.Component
{
  constructor(){
    super();
    this.state = {name:"John"}
  }
  render()
  {
    return(
      <h1>I am Sample::{this.state.name}</h1>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//React State

/*class Sample extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={
      empid:1001,
      ename:"mohamed",
      salary:5000
    }
  }
  render()
  {
    return(
      <div>
        <h1>My EmployeeId::{this.state.empid}</h1>
        <h2>MyEmployeeName::{this.state.ename}</h2>
        <h3>MySalary::{this.state.salary}</h3>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample />)*/

//Changing the state object

/*class Sample extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={
      emp:{
        id:1001,
        name:"azar",
        city:"karur"
      },
      showData:false
    };
  }
  showData()
  {
    this.setState({showData:true})
  }
  hideData()
  {
    this.setState({showData:false})
  }
  render()
  {
    let data;
    if (this.state.showData==true)
    {
       data=<div><b>City:</b>{this.state.emp.city}
       <button onClick={this.hideData.bind(this)}>Hide Data</button></div>

    }
    else
    {
      data=<button onClick={this.showData.bind(this)}>ShowData</button>
    }
    return(
      <div className='App'>
        <h1>EmployeeDetails</h1>
        {data}
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample />);*/

//Using Constructor

class Header extends Component
{
  text="Welcome"
  constructor(props)
  {
    super(props);
    this.state={f1:'red'}
  }
  render()
  {
    return(
      <h3 style={{color:this.state.f1}}>{this.props.text}</h3>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Header text="Helloworld"/>)

//React Event