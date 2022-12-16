package pi4.main.Classes

import android.graphics.Bitmap

class PontoInteresse(imageUrl:String, nome:String, categoria:String, local:String, rating:String, score:String) {
    var imageUrl: String
    var nome: String
    var categoria: String
    var local: String
    var rating: String
    var score: String

    init {
        this.imageUrl = imageUrl
        this.nome = nome
        this.categoria = categoria
        this.local = local
        this.rating = rating
        this.score = score
    }
}