package pi4.main.Classes

class HistoricoPontos(pontoInteresse: String, data: String, pontos: String, sentido: String) {
    val pontoInteresse:String
    val data:String

    //Será necessario dar split??
    val pontos:String
    val sentido: String

    init {
        this.pontoInteresse = pontoInteresse
        this.data = data
        this.pontos = pontos
        this.sentido = sentido
    }
}