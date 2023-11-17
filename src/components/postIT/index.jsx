import { useState } from 'react'
import axios from 'axios';
import Header from '../header'
import MainContent from '../mainContent'
import Controler from '../Controler'
import '../postIT/postIT.style.css'

export default function Post(){
    const [respServer, setRespServer] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [tag, setTag] = useState('')


    class handleToDoList{
        constructor(title, content, tag){
            this.titleNote = title
            this.contentNote = content
            this.tag = tag
        }
    }

    const handleCancel = () => {
        setTitle('')
        setContent('')
    }


    const ToDo = async (index) =>{
        const ToDoList = new handleToDoList(index[0], index[1], index[2])

        try{
            const res = await axios.post('http://localhost:3000/', ToDoList)
            console.log(res)
            setRespServer(res.data)
            console.log(respServer)
        }
        catch(err){
            console.error(err)
        }
    }

    const handleDone = () => {
        const ToDoList = [title, content, tag]

        const newArr = ToDoList.some(el => el.length < 1);

        if (newArr) {
          console.error('Erro: pelo menos um elemento tem menos de 1 caractere!');
        }else{
            ToDo(ToDoList)
        }


        setTitle('')
        setContent('')
    }

    return(
        <div className="Post">
            <Header title={title} setTitle={setTitle}>
            </Header>

            <MainContent content={content} setContent={setContent}>
            </MainContent>

            <Controler tag={tag} setTag={setTag} onCancel={handleCancel} onDone={handleDone}>
            </Controler>
        </div>
    )
}