import React , {useState} from 'react';


//This is known as prop drilling as same props is being passed on to multiple function

const GrandChild = (props) =>
(
  <div>
    <h3>Grand Child:</h3>
    <Child brand={props.brand}/>
  </div>
)

const Child = (props) =>{

  return(
    <div>
      <h2>Child: {props.brand} </h2>
    </div>
  )

} 

const App = () =>{
  
  const[brandName]= useState("Amazon")
  return(
    <div>
      <h1>Hello</h1>
      <GrandChild brand={brandName}/>
    </div>

  )
}

export default App;
