import React from 'react'
import Navbar from '../navbar/Navbar'
import { useForm} from '@formspree/react';
import Loading from './Loading';




export default function Contact() {
    const [state, handleSubmit] = useForm("xdovwroa");

    function ValueVerif(){
        const email = document.getElementById("email").value;
        const name = document.getElementById("name").value;
        const message = document.getElementById("message").value;
        
        if(email.length >= 5 && name.length >= 2 && message.length >= 4){
            document.getElementById("submit").disabled = false;
        }else{
            document.getElementById("submit").disabled = true;
        }}

        function wait(time) {
            return new Promise(resolve => setTimeout(resolve, time));
          }

         function Submit(){
            document.getElementById("message_confirm").style.display = "block"
            wait(60).then(() => {
                document.querySelector("form").reset();
              });
         }

  return (
    <div>
        <Navbar/>
        <Loading/>
        <div className='contact'>
            <div className='contact_card'>
                <h1 id='titre'>Contact</h1>
                <form onSubmit={handleSubmit} onChange={ValueVerif}>
                    <div className='placement'>
                <textarea placeholder="Email"  id="email" type="email" name="email"/>
                <textarea placeholder="Name" id="name" name="name"/>
                </div>
                <textarea placeholder="Sujet" id="sujet" name="sujet"  />
                <textarea placeholder="Message" className='textarea_message' id="message" name="message" />
                <input type="submit" value="Submit" id='submit' disabled={state.submitting} onClick={Submit} ></input>
                </form>
                <p id='message_confirm' className='mesage_confirm'>Message bien envoyé !</p>
            </div>
        </div>
        </div>
  )
}
