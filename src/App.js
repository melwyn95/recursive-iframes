import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'


function Box({ color, top, left, count }) {
  return <Fragment>
    {count == 3 && <div style={{position: "absolute", backgroundColor: color, height: "50%", width: "50%", top: `${top}vh`, left: `${left}vw`}} />}
    {count < 3 && <iframe title={`${count}`} src={`/${+count+1}`} style={{position: "absolute", height: "50%", width: "50%", top: `${top}vh`, left: `${left}vw`}} frameBorder="0"/>}
  </Fragment>;
}

function Container(props) {
  const { match: { params: { count = '0' } } } = props;
  console.log(count);
  return (<div style={{position: "absolute", height:"100vh", width: "100vw"}}>
    <Box color="black" top={0} left={0} count={count}/>
    <Box color="white" top={0} left={50} count={count}/>
    <Box color="white" top={50} left={0} count={count}/>
    <Box color="black" top={50} left={50} count={count}/>
  </div>)
}

function App() {
  return (
    <Router>
      <Route exact path="/" component={Container}/>
      <Route path="/:count" component={Container}/>
    </Router>
  );
}

export default App;
