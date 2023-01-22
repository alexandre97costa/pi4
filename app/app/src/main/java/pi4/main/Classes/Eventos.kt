package pi4.main.Classes

class Eventos(id: String, nome: String, data: String ,descricao: String ,numPontos: Int, numVagas: Int, tipoEvento: String, listaSessoes: ArrayList<Sessao> ,pontoInteresseId: String) {
    val id: String
    val nome: String
    val descricao: String
    val data: String
    val numPontos: Int
    val numVagas: Int
    val tipoEvento: String
    val listaSessoes: ArrayList<Sessao>
    val pontoInteresseId: String

    init {
        this.id = id
        this.nome = nome
        this.descricao = descricao
        this.data = data
        this.numPontos = numPontos
        this.numVagas = numVagas
        this.tipoEvento = tipoEvento
        this.listaSessoes = listaSessoes
        this.pontoInteresseId = pontoInteresseId
    }
}