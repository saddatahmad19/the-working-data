import { db } from '../firebaseConfig';
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import React, {useState} from 'react'
import './FormStyles.css'

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [details, setDetails] = useState('');

  const submitDetails = async() => { 
      await addDoc(collection(db, "submissions"), {
        formName: name,
        formEmail: email,
        formSubject: subject,
        formDetails: details,
        timeOf: serverTimestamp()
      }).then(() => {
        console.log("Message has been sent");
      }).catch((err) =>{
        console.error(err);
      })
      window.location.pathname('/contact')
   }

  return (
    <div className='form'>
        <form onSubmit={submitDetails}>
            <label>Name</label>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
            <label>Email</label>
            <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <label>Subject</label>
            <input type='text' value={subject} onChange={(e) => setSubject(e.target.value)}></input>
            <label>Details</label>
            <textarea rows='6' value={details} placeholder='Type details here' onChange={(e) => setDetails(e.target.value)}></textarea>
            <button className='btn ext' type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form