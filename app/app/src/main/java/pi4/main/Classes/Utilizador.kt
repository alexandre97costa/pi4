package pi4.main.Classes

class Utilizador() {
    var nome: String = ""
    var email: String = ""
    var pontos: String = ""

    init {
        //Mudar!!!!!!! temos de tirar isto se n vai estar sempre a fazer pedidos api
        getUtilizador(1)
    }

    //Fazer o pedido api
    fun getUtilizador(id: Int) {
        this.nome = "Rúben Cabelos"
        this.email = "rubenzinho@gmail.com"
        this.pontos = "50"
    }
}