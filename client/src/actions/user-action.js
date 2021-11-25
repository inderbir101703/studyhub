
import { connect } from 'react-redux';
import { FETCH_CONTACTS,ADD_CONTACT} from '../constants/type'
export const fetchContacts=()=>async(dispatach)=>{
    const resp=await fetch('/contacts');
    const contacts=await  resp.json()
   
    let action = {type:FETCH_CONTACTS, data : contacts}
    dispatach(action);


}

export const addContact=(contact)=>async (dispatch)=>{

 const resp=await fetch('/contacts',{
 method:'POST',
 body:JSON.stringify(contact),
 headers:{
    'Content-Type' :'application/json'
 }
});
let newContact=await resp.json();
dispatch({action:ADD_CONTACT,type:newContact});

}