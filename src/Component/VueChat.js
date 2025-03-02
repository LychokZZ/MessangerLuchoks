import React,{useContext, useState , useEffect} from 'react';
import { Context } from "..";
import "../Styles/Chats.css"

const VueChats = ({ user2 }) =>{
    const {store} = useContext(Context);
    const user1 = JSON.parse(localStorage.getItem('User'));

    const [Chat ,setChat] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await store.getChat(user1, user2);
                setChat(res);
            } catch (error) {
                console.error("Помилка:", error); 
            }
        }
        fetchData();
    }, [user1, user2, store]);


    return(
       <div>
            <div>
                {Chat.map((messag, key)=>(
                    <div key={key}>
                        {messag.user1 && messag.user1.length > 0 ? <div className='senderUS' key={key}>{user1} : {messag.user1}</div> : ""}
                        {messag.user2 && messag.user2.length > 0 ? <div className='getterUS' key={key}>{user2} : {messag.user2}</div> : ""}
                    </div>
                ))}
            </div>
       </div> 
    )

}
export default VueChats;

