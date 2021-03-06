import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

const GifExpertApp =({defaultCategories = []}) => {

   // const [categories, setCategories] = useState( ['One Punch'])
    const [categories, setCategories] = useState( defaultCategories )
    
    return (
        <>
           <h2>GifExpertApp</h2> 
           <AddCategory setCategories = {setCategories}></AddCategory>
           <hr></hr>

           <ul>
               {
                   categories.map( (category, i) => {
                       return <GifGrid key = {i} category = {category}/>
                   })
               }
           </ul>
        </>
    )
}


export default GifExpertApp
