export default function MainContent({content, setContent}){


    return(
    <main className="PostContent">
        <textarea 
        id="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}

        className="PostContent-input" 
        type="text" 
        placeholder="Anotações aqui"/>
    </main>

    )
}