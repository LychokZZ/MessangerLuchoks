import React,{useContext, useState , useEffect} from 'react';
import { Context } from "..";
import "../Styles/Chats.css"
import { HiMagnifyingGlass } from "react-icons/hi2";

const Chats = () =>{
    const [Contacts, setContacts] = useState([])
    const {store} = useContext(Context);
    const User =  JSON.parse(localStorage.getItem('User'));
    
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
    return(
       <div>
            <div className='contacts-conteiner'>
                <div className='input-block'>
                    <h3>Чати</h3>
                    <div className='input'>
                        <HiMagnifyingGlass />
                        <input  className='input2' placeholder='Пошук'></input>
                    </div>
                    
                </div>
                {Contacts.map((contact, index) => (
                    <div>
                        <button className='contacts'>
                            <div key={index}>{contact}</div>
                        </button>
                        <hr className='hr-line'></hr>
                    </div>
                ))}
            
                
            </div>
       </div> 
    )

}
export default Chats;

