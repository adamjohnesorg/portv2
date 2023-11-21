import React from 'react'

const NavBar = () => 
{
  return (
    <div id='navbarDiv' className='mt-16 mb-16'>
        <nav>
            <div className='flex flex-col items-center pt-3 pb-3 pl-10 pr-10'>
                <h1 className='txt-primary text-4xl mb-6'>Content</h1>
                <span id='navSelect' className='txt-nav'>I | Education</span>
                <span id='navSelect' className='txt-nav'>II | Experience</span>
                <span id='navSelect' className='txt-nav'>III | Projects</span>
                <span id='navSelect' className='txt-nav'>IV | Description</span>
            </div>
        </nav>
    </div>
  )
}

export default NavBar