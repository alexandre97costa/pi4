package pi4.main.Classes

class Recompensa(id: String, nomeRecompesa: String, descricao: String ,pontos: String, categoria: String) {
    val id: String
    val nomeRecompesa: String
    val descricao: String
    val pontos: String
    val categoria: String

    init {
        this.id = id
        this.nomeRecompesa = nomeRecompesa
        this.descricao = descricao
        this.pontos = pontos
        this.categoria = categoria
    }

}