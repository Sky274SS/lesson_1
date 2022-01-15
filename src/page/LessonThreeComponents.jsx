import React from 'react'

const LessonThreeComponents = (props)=>{
    return (
        <div className='components'>
            <div className='componentsText'>{props.text}</div>
            <button onClick={()=>{props.onExit()}}>Close Components</button>
        </div>
    )
}

export default LessonThreeComponents