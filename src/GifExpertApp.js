import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from "./components/GifGrid";
export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["One Punch"])

    return (
        <div>
            <h2 className="animate__animated animate__fadeIn">Gif Expert App</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {categories.map((category, key) => <GifGrid key={key} category={category} />)}
            </ol>
        </div>
    )
}
