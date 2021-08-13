import React,{ useContext } from "react";
import { AuthContext } from "../contex/AuthContext";

function withAuth(Component){
    return function(props){
        const{loggedInUser, setLoggedInUser, logginStatus, setLogginStatus} =  useContext(AuthContext);

        return(

            <Component 
            loggedInUser={loggedInUser} 
            setLoggedInUser={setLoggedInUser} 
            logginStatus={logginStatus}
            setLogginStatus={setLogginStatus} 
            {...props}>

            </Component>
        );
    }
}export default withAuth;