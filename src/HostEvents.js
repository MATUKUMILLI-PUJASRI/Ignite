import { useNavigate } from 'react-router-dom';
import React from 'react';
function host(){
    const navigate = useNavigate();
    return(
        
<>
<button className="ui primary submit button" onClick={()=>{navigate('/')}}>Host Event</button>
</>
    )
}
export default host;