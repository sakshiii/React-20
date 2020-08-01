
import React ,{Fragment} from 'react'
import Provider from './Provider'
import Context from './Context'

const Agents = () =>{
  return <AgentOne/>
}

const AgentOne = () =>{
  return <AgentTwo/>
}

const AgentTwo = () =>{
  return <AgentBond/>
}

const AgentBond = () =>{
  return (
    <Context.Consumer>
    {
      (context)=>(
        <Fragment>
          <h3>Mission Final Information</h3>
          <p>Mission Name: {context.data.mname} </p>
          <h3>Mission Status:{context.data.accept}</h3>
          <button onClick={context.isMissionAccepted}>Click here to change the status !!</button>
        </Fragment>
      )
    }
    </Context.Consumer>
  )
}

const App = () =>{

  return (
    <div>
      <h1>Context API</h1>
      <Provider>
        <Agents />
      </Provider>
    </div>

  )
}

export default App
