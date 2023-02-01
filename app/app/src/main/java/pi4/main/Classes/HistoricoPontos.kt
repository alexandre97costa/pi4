package pi4.main.Classes

class HistoricoPontos(pontoInteresse: String, dataHora: String, pontos: String, sentido: Boolean) {
    val pontoInteresse:String
    val data:String

    //Será necessario dar split??
    val pontos:String
    val sentido: Boolean

    init {
        this.pontoInteresse = pontoInteresse
        this.data = splitData(dataHora)
        this.pontos = pontos
        this.sentido = sentido
    }

    private fun splitData(dataHora: String): String {
        return dataHora.split("T")[0]
    }
}