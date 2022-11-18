package pi4.main

class PontoInteresse(pontoInteresse:String, categoria:String, local:String, rating:String, score:String) {
    var pontoInteresse: String
    var categoria: String
    var local: String
    var rating: String
    var score: String

    init {
        this.pontoInteresse = pontoInteresse
        this.categoria = categoria
        this.local = local
        this.rating = rating
        this.score = score
    }
}