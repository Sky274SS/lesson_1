import React, { useState } from 'react';
import './layout.css'
import '../page/LessonOne'
import LessonOne from '../page/LessonOne';
import LessonTwo from '../page/LessonTwo';
import LessonThree from '../page/LessonThree';

const Layout = ()=>{
 
const [isOneLesson,setIsOneLesson] = useState(false)
const [isTwoLesson,setIsTwoLesson] = useState(false)
const [isThreeLesson,setIsThreeLesson] = useState(false)
    return(
        <div className='layout'>
            <div className='container'>
            <div className='lessonTitle' onClick={()=>{setIsOneLesson(!isOneLesson)}} >Структура web страницы, DOM дерево, виртуальное DOM дерево</div>
                {isOneLesson && <LessonOne/>}
                <div className='lessonTitle' onClick={()=>{setIsTwoLesson(!isTwoLesson)}}>Структура JSX файла</div>
                {isTwoLesson &&<LessonTwo/>}
                <div className='lessonTitle' onClick={()=>{setIsThreeLesson(!isThreeLesson)}}>Компоненты, Пропсы (основы)</div>
                {isThreeLesson &&<LessonThree/>}
            </div>

        </div>
    )
}

export default Layout