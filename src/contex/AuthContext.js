import React ,{createContext, useState} from 'react';

export const AuthContext = createContext();

function AuthProvider({children, initialLoggedInUser}){
const [loggedInUser, setLoggedInUser] = useState({userName:'Gäst',userId:0});
const[logginStatus, setLogginStatus]=useState(false);


return(

    <AuthContext.Provider value={
        {loggedInUser,setLoggedInUser,logginStatus, setLogginStatus}
    }>
        {children}
    </AuthContext.Provider>
)

}export {AuthProvider}
