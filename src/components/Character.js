// Write your Character component here
import React from 'react';
import styled from "styled-components";

const StyledDiv = styled.div`
display:flex;
  background-color: black;
  color:white;
  margin: 3%;
  padding: 2%;
  border: 3px solid green;
`;

const StyledButton = styled.button`
 margin-left: 50px;
 
`

const Character = (props => {
  
    const {user} = props;
    console.log("thisUSer", user);
    return(
            <StyledDiv  className = "header">
            {user.name} 
            <StyledButton>
                {user.birth_year}; 
            </StyledButton>
    
            </StyledDiv>
            
        
        )
            
    });

export default Character;