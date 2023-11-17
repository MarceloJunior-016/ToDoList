export default function Controler({onCancel, onDone, setTag, tag}){

    return (
    <footer className="PostFooter">

        <div>
            <select onChange={(e) => setTag(e.target.value)} value={tag} className="PostFooterSelect" id="select_tags" name="tags">
                <option id="opt_tags" value="">Tags:</option>
                <option id="opt_tags" value="Done">Feito</option>
                <option id="opt_tags" value="In progress">Em andamento</option>
                <option id="opt_tags" value="Not started">Não iniciado</option>
            </select>
        </div>

        <div>
            <button className="ButtonCancel" onClick={onCancel}>Cancel</button>
            <button className="ButtonDone" onClick={onDone}>Done</button>
        </div>

    </footer>

    )
}