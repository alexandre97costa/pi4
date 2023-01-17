package pi4.main.Classes

class HistoricoVisitas(image_url: String, nome: String, morada: String, tipoInteresse: String) {
    val image_url: String
    val nome: String
    val morada: String
    val tipoInteresse: String

    init {
        this.image_url = image_url
        this.nome = nome
        this.morada = morada
        this.tipoInteresse = tipoInteresse
    }
}