package pi4.main.Classes

class Recompensa(pontos: String, recompensa: String, categoria: String) {
    val pontos: String
    val recompensa: String
    val categoria: String

    init {
        this.pontos = pontos
        this.recompensa = recompensa
        this.categoria = categoria
    }

}