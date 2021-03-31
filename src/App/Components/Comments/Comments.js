import { set } from 'lodash';
import React, { useState } from 'react'
import './Comments.css'

const Comments = () => {

   const arrComments = [
      { name: "Jack", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
      { name: "Mike", text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }
   ]

   const [comments, setComments] = useState(arrComments);
   const [newComments, setNewComments] = useState({
      name: "",
      text: "",
   })

   const handleNameChange = (e) => (
      setNewComments((value) => ({
         ...value,
         name: e.target.value
      }))
   )

   const handleTextChange = (e) => (
      setNewComments((value) => ({
         ...value,
         text: e.target.value
      }))
   )

   const onSend = (e) => {
      e.preventDefault();
      setNewComments({
         name: "",
         text: "",
      })
      setComments((value) => {
         return [...value, newComments]
      })
   }

   return (

      <div className='reviews-body'>
         <div className='reviews-container'>
            <h1 className="page-title">Your Reviews About Us</h1>
            {
               comments.map((item, i) => (
                  <div
                     key={i}>
                     <div className='user-name'>Name: {item.name}</div>
                     <div className='user-message'>Message: {item.text}</div>
                     <hr />
                  </div>
               ))
            }

            <form
               onSubmit={onSend}
            >
               <p>Leave your comment.</p>
               <div className='input-name'>
                  <input
                     placeholder='Your name'
                     type='text'
                     value={newComments.name}
                     onChange={handleNameChange}
                  />
               </div>
               <div className='input-text'>
                  <textarea
                     placeholder='Your message'
                     value={newComments.text}
                     onChange={handleTextChange}
                  ></textarea>
               </div>
               <button className='leave-comment'>Leave a comment</button>
            </form>
         </div>

      </div>
   )
}

export default Comments