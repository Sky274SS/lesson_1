import React, { useState } from 'react'
import './lessonOne.css'

const LessonOne = ({state})=>{
    const names = ['block one','block two']
    const [name,setName]=useState('block three')
    return(
        <div className='oneContainer'>
            <div className='description'>Document Object Model</div>
            <div className='block'> 
                <div>
                    <div>{names[0]}</div>
                    <div>{names[1]}</div>
                    <div onClick={()=>{
                        if (name === 'block three'){
                            setName('block three was changed')
                        }
                        else{
                            setName('block three')
                        }
                        }}>{name}</div>
                </div>
                <div>
                    <div>{names[0]}</div>
                    <div>{names[1]}</div>
                </div>
                <div>
                    <div>{names[0]}</div>
                    <div>{names[1]}</div>
                    <div>block three</div>
                    <div>block four</div>
                </div>
            </div>
        </div>
    )
}

export default LessonOne