package pi4.main.Classes

class HistoricoVisitas(id: String, image_url: String, nomePontoInteresse: String, morada: String, tipoInteresse: String) {
    val id: String
    val image_url: String
    val nomePontoInteresse: String
    val morada: String
    val tipoInteresse: String

    init {
        this.id = id
        this.image_url = image_url
        this.nomePontoInteresse = nomePontoInteresse
        this.morada = morada
        this.tipoInteresse = tipoInteresse
    }
}