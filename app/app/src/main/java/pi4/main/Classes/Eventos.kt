package pi4.main.Classes

class Eventos(id: String, nome: String, data: String ,descricao: String, morada: String ,numPontos: Int, numVagas: Int, numHoras: Int, tipoEvento: String, pontoInteresseId: String) {
    val id: String
    val nome: String
    val descricao: String
    val morada: String
    val data: String
    val numPontos: Int
    val numVagas: Int
    val numHoras: Int
    val tipoEvento: String
    val pontoInteresseId: String

    init {
        this.id = id
        this.nome = nome
        this.descricao = descricao
        this.morada = morada
        this.data = data
        this.numPontos = numPontos
        this.numVagas = numVagas
        this.numHoras = numHoras
        this.tipoEvento = tipoEvento
        this.pontoInteresseId = pontoInteresseId
    }
}