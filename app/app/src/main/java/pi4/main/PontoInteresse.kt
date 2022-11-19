package pi4.main

import android.graphics.Bitmap

class PontoInteresse(imageUrl:String, pontoInteresse:String, categoria:String, local:String, rating:String, score:String) {
    var imageUrl: String
    var pontoInteresse: String
    var categoria: String
    var local: String
    var rating: String
    var score: String

    init {
        this.imageUrl = imageUrl
        this.pontoInteresse = pontoInteresse
        this.categoria = categoria
        this.local = local
        this.rating = rating
        this.score = score
    }
}