import withAuth from "./withAuth";
import React, { useContext } from "react"
import manageUserData from '../hooks/userDataHook';
import AddUser from "./addUser"

function Users({ loggedInUser, setLoggedInUser, logginStatus, setLogginStatus, }) {
    const { userData, error, updateUserData, } = manageUserData([])

    function NotLoggedIn() {
        return (
            <div>

                <form >

                    <select name="usercmb" id="usercmb">
                        <option value="gäst">Gäst</option>
                        {userData.users.users.map(user => (
                            <option key={user.userId} value={user.userId}>
                                {user.userName}
                            </option>

                        ))}
                    </select>
                    <br /> <br />

                    <button onClick={(e) => {
                        e.preventDefault();
                        const userid = document.getElementById("usercmb").value
                        if(userid=='gäst'){
                        setLoggedInUser({userName:'Gäst',userId:0});
                        setLogginStatus(false);
                    }
                        else{
                        setLoggedInUser(Object.values(userData.users.users).filter(
                            a => a.userId == userid
                            )[0]);
                            setLogginStatus(true);
                    }}}>Login</button>
                </form>


            </div>
        )
    }
    function LoggedIn() {
        return (
            <div >

                <AddUser updateUserData={updateUserData}/>



                <button onClick={(e) => {
                    e.preventDefault();
                    setLoggedInUser({userName:'Gäst',userId:0});
                    setLogginStatus(false);
                }}>Logout</button>



            </div>
        )
    }


    if (!userData) return null;
    if (!loggedInUser || !loggedInUser.userName || (loggedInUser.userName).toString().toLowerCase() == 'gäst') {
        return (

            <div>
                <h3>Du är inloggad som gäst</h3>
                <NotLoggedIn />
            </div>
        )
    }
    return (
        <div>
            <div>
                <h3>Du är inloggad som {loggedInUser.userName}</h3>
                <LoggedIn /></div>
            <h1>Users</h1>

            <div>
            </div>
            <table>
                <tbody>
                    <tr>
                        <th>
                            Id
                        </th>
                        <th>
                            Namn
                        </th>
                        <th>
                            Mail
                        </th>
                        <th>
                            Avatar
                        </th>
                    </tr>

                    {userData.users.users.map(user => 
                        {

                            return (
                                <tr class="nodisplay" key={user.userId} onClick={(e)=>{( 
                                    e.currentTarget.className=="displayed" ?
                                        e.currentTarget.className="nodisplay":
                                        e.currentTarget.className="displayed"
                                    )
                                
                                }}>
                                    <td>{user.userName}</td>
                                    <td>{user.userId}</td>
                                    <td class="nodisplay">{user.userEmail}</td>
                                    <td class="nodisplay"><img  class="nodisplay" src={user.userAvatar} style={{maxWidth:'100px'}}  /></td>
                                </tr>
                                    )
                        }
                    )
                    }
                </tbody>
            </table>

            <br /> <br /> <br />

        </div>
    );

} export default withAuth(Users);