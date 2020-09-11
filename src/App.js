
import React, { useState, useEffect } from "react";
import "./App.css";
//import axios from "axios";
import styled from "styled-components";
import Character from "./components/Character";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  //console.log(axios.get(`https://swapi.dev/api/people/1/`));
  //const apikey= 1;

  
const StyledApp = styled.div`
 display:flex;
 flex-flow:column;
 
`;
const StyledDiv = styled.div`
display: flex;
flex-flow: row;
flex-wrap:wrap;
`;

  const [user, setUser] = useState([]);
  
 useEffect(()=>{
   fetch("https://swapi.dev/api/people/")
    .then(response=>response.json())
    .then(user=>{
      console.log("fetch",user);
      setUser(user.results);
      //setImage(user.hdurl);
    })
 },[])

console.log(user.results);
      if(!user){
        return <p>Loading.. </p>
      }
      else{
  return(
    
    <StyledApp className="App">
      <h1 className="Header">React Wars</h1>
      
      <StyledDiv>  {user.map((name) =>{
        console.log("ThIS IS MAP", name);
       return <Character user={name}/>;
      })};</StyledDiv>
    
  
         </StyledApp>
         )
      };
}

export default App;
