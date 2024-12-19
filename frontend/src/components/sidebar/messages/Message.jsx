import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end '>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img
                    alt='Tailwind CSS chat bubble component'
                    src="./user.png" />
              </div>

          </div>
        <div className='{`chat-bubble chat-bubble-info text-white bg-blue-500 }'>
            Hi! what is uppp!!!</div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:12</div>
      
    </div>
  )
}

export default Message
