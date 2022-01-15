import React, { useState } from 'react'
import LessonThreeComponents from './LessonThreeComponents';

const LessonThree = ()=>{
   const [isComponents,setIsComponents] = useState(false);
    const [text,setText] = useState('hi, i am from LessonThree.jsx')
    return(
        <div>
            <div className='threeContainer'>
                <button onClick={()=>{
                    if(isComponents===false){
                        setIsComponents(true)
                    }
                }}>Show Components</button>

                <button onClick={()=>{
                    if(text==='hi, i am from LessonThree.jsx'){
                        setText('i was changed')
                    }
                    else {
                        setText('hi, i am from LessonThree.jsx')
                    }
                }}>Change text</button>

                 {isComponents && <LessonThreeComponents
            state={isComponents}
            text={text}
            onExit={()=>{setIsComponents(false)}}
            />}
            </div>
           
        </div>
    )
}

export default LessonThree