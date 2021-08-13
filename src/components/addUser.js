import React,{useState} from "react";

function AddUser({updateUserData}){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState('');
    function handleSubmit(e) {
        

       onInputSubmitClick(name,email,avatar);

    setName('');
    setEmail('');    
    setAvatar('');

      }
      function onInputSubmitClick(name,email,avatar) {

        


        const axios = require('axios')

        axios
            .post('http://localhost:4000/api/v1/setUser', {
                userName: name,
                userEmail: email,
                userAvatar: avatar
            })
            .then(res => {
                console.log(`statusCode: ${res.status}`)
                console.log(res)
                updateUserData();
            })
            .catch(error => {
                console.error(error)
            });
            
    }
    return(

        <div>            <form >
            <fieldset style={{ maxWidth: '400px' ,background : '#dd6'}} >
            <legend >Lägg till en användare</legend>
            <fieldset>
                <legend>Vem vill du lägga till?</legend>
                <label >Ange namn:</label>
                <input style = {{display: 'block',width:'75%'}} type="text" id="name" value={name}
          onChange={e => setName(e.target.value)}></input>

                <label >Ange email:</label>
                <input style = {{display: 'block',width:'100%'}} type="text" id="email" value={email}
          onChange={e => setEmail(e.target.value)}></input>
            </fieldset>
                <label >Ange url till din avatar:</label>
                <textarea style = {{display: 'block'}} rows="10" col="100"type="textarea" id="avatar" value={avatar}
          onChange={e => setAvatar(e.target.value)}></textarea>
                <fieldset>
                    <legend>Lägg till</legend>
                 <label >Klicka på knappen:</label>
                <button style = {{display: 'block'}} name="submit" type="button" id="submit"  onClick={handleSubmit}>Sänd</button>   
                </fieldset>            
            </fieldset>
        </form>
        </div>
    )
}
export default AddUser;