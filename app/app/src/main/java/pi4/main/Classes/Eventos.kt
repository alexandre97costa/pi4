package pi4.main.Classes

class Eventos(id: String, nome: String, data: String ,descricao: String, numPontos: Int, numVagas: Int, numHoras: Int, tipoEvento: String) {
    val id: String
    val nome: String
    val data: String
    val descricao: String
    val numPontos: Int
    val numVagas: Int
    val numHoras: Int
    val tipoEvento: String

    init {
        this.id = id
        this.nome = nome
        this.data = data
        this.descricao = descricao
        this.numPontos = numPontos
        this.numVagas = numVagas
        this.numHoras = numHoras
        this.tipoEvento = tipoEvento
    }
}