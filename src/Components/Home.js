import React from 'react'
import Navbar from './Navbar'
import Upload from './Upload'

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='container mt-5'>
                <h2 className='text-left'>
                    Welcome to, Exile !
                </h2>
                <h3 className='text-left'>
                    <small className='text-muted'>
                        Detect cancer early with a simple image upload - AI-powered accuracy at your fingertips
                    </small>
                </h3>
            </div>
            <Upload></Upload>
        </div>
    )
}

export default Home
