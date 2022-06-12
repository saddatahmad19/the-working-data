import React from 'react'
import './FormStyles.css'


function Form() {
  return (
    <div className='form'>
        <form>
            <label>Name</label>
            <input type='text'></input>
            <label>Email</label>
            <input type='text'></input>
            <label>Subject</label>
            <input type='text'></input>
            <label>Details</label>
            <textarea rows='6' placeholder='Type details here'></textarea>
            <button className='btn ext'>Submit</button>
        </form>
    </div>
  )
}

export default Form