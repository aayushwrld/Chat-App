import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import MessageContainer from '../components/Messages/MessageContainer'

function Home() {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div
        className='flex h-full sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-custom-gray-2 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'
        style={{ boxShadow: '0 0px 10px rgba(255, 255, 255, 0.2), 0 5px 20px rgba(255, 255, 255, 0.2)' }}
      >
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  )
}

export default Home
