import React,{useContext} from 'react';
import { Context } from "..";

const Chats = () =>{
    const {store} = useContext(Context);
    const User =  JSON.parse(localStorage.getItem('User'));
    const response = store.getContact(User)
    console.log(response)
    return(
       <div>
            <p>Hellowws fsps</p>
       </div> 
    )

}
export default Chats;

