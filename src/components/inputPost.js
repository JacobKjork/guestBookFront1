import React,{useState} from "react";
function InputPost ({onInputSubmitClick}){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [meddelande, setMeddelande] = useState('');
    function handleSubmit(e) {
        

        onInputSubmitClick(name,email,meddelande);
        setMeddelande('')

      }
      
    return (
        
        <div>
        
        <form >
            <fieldset style={{ maxWidth: '400px' ,background : '#dd6'}} >
            <legend >Skriv ett inlägg</legend>
            <fieldset>
                <legend>Vem är du?</legend>
                <label >Ange ditt namn:</label>
                <input style = {{display: 'block',width:'75%'}} type="text" id="name" value={name}
          onChange={e => setName(e.target.value)}></input>

                <label >Ange ditt email:</label>
                <input style = {{display: 'block',width:'100%'}} type="text" id="email" value={email}
          onChange={e => setEmail(e.target.value)}></input>
            </fieldset>
                <label >Ange ditt meddelande:</label>
                <textarea style = {{display: 'block'}} rows="10" col="100"type="textarea" id="meddelande" value={meddelande}
          onChange={e => setMeddelande(e.target.value)}></textarea>
                <fieldset>
                    <legend>Posta meddelande</legend>
                 <label >Klicka på knappen:</label>
                <button style = {{display: 'block'}} name="submit" type="button" id="submit"  onClick={handleSubmit}>Sänd</button>   
                </fieldset>

                

            
            </fieldset>
        </form>
        </div>
        
        );
};
export default InputPost;