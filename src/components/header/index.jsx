import { useState } from "react"
export default function Header({title, setTitle}){

    return(
        <header className="PostHeader">
        
        <input
        type="text"
        value={title}
        onChange={(e)=> setTitle(e.target.value) }
        className="PostHeaderInput"

        id="PostHeaderInput" 
        placeholder="Nome da Anotação"/>

    </header>
    )
}