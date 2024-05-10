import React from 'react';
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

class Sample extends React.Component
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
r1.render(<Sample/>)