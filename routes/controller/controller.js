class Controller{
    constructor(title, content, tag){
        this.title = title
        this.content = content
        this.tag = tag
    }

    set setNote(newValor){
        this.title = newValor.title
        this.content = newValor.content
        this.tag = newValor.tag
    }

    get getNote(){
        return [this.title, this.content, this.tag]
    }
    /*
        add(verificar)
        remove()
        update()

    
    */
}

module.exports = Controller