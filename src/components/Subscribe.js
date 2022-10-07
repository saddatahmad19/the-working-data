import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import React, { useState } from 'react'
import './SubscribeStyles.css'
import { db } from '../firebaseConfig'


function Subscribe() {

  const [subscribe, setSubscribe] = useState('');


  // const submitHandler = e => {
  //   e.preventDefault();
  //   axios.post("https://sheet.best/api/sheets/b5720007-b5ef-4974-ad8f-75f2d2fe73ae","subscribe").then(response => {console.log(response);});
  // }
 
  const submitEmail = async() => { 
    await addDoc(collection(db, "emails"), {
      formEmail: subscribe
    }).then(() => {
      console.log("Message has been sent");
    }).catch((err) =>{
      console.error(err);
    })
 }

  return (
    <div className='sub-bar'>
        <h1 className='sub-heading'>Subscribe to our newsletter</h1>
        <div className='sub-form'>
            <form onSubmit={submitEmail}>
                <input type='sub-email' placeholder='Email' value={subscribe} onChange={(e) => setSubscribe(e.target.value)}></input>
                <button className='sub-btn' type='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Subscribe