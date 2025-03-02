import React,{useContext, useState , useEffect} from 'react';
import { Context } from "..";
import "../Styles/Chats.css"
import { HiMagnifyingGlass } from "react-icons/hi2";
import VueChats from './VueChat';
import Heder from './HearedChat';

const Chats = () =>{
    const [Contacts, setContacts] = useState([])
    const {store} = useContext(Context);
    const User =  JSON.parse(localStorage.getItem('User'));
    const [chat,setChat] = useState('')
    const [chatWith, setchatWith] = useState('')
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await store.getContact(User);
                setContacts(res);
            } catch (error) {
                console.error("Помилка:", error); 
            }
        }
        fetchData();
    }, [User, store]);
    const chats =(user)=> {
        setTimeout(()=>{
            setChat(<VueChats user2 = {user} />)
        },100)
    }
    const openChat = (user)=>{
        setchatWith(<Heder user2={user}/>)
        setChat('')
        chats(user)
    }
    return(
       <div className='App'>
            <div className='contacts-conteiner'>
                <div className='input-block'>
                    <h3>Чати</h3>
                    <div className='input'>
                        <HiMagnifyingGlass />
                        <input  className='input2' placeholder='Пошук'></input>
                    </div>
                    
                </div>
                {Contacts.map((contact, index) => (
                    <div key={index}>
                        <button className='contacts' onClick={()=>openChat(contact)}>
                            <div key={index}>{contact}</div>
                        </button>
                        <hr className='hr-line'></hr>
                    </div>
                ))}
                
                
            </div>
            <div>
                <div >
                    {chatWith ? chatWith : <Heder/>} 
                </div>
                <div>
                    {chat}
                </div>    
            </div>
       </div> 
    )

}
export default Chats;

