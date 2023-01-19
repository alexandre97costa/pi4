package pi4.main.Classes

class Utilizador() {
    var nome: String = ""
    var email: String = ""
    var pontos: String = ""
    var listaHistoricoPontos: ArrayList<HistoricoPontos> = arrayListOf()

    init {
        //Mudar!!!!!!! temos de tirar isto se n vai estar sempre a fazer pedidos api
        getUtilizador(1)
    }

    //Fazer o pedido api
    fun getUtilizador(id: Int) {
        this.nome = "Rúben Cabelos"
        this.email = "rubenzinho@gmail.com"
        this.pontos = "50"
        this.listaHistoricoPontos.add(
            HistoricoPontos(
            "Jardim das mães",
            "24/12/2022",
            "10", "positivo"
            ))
        this.listaHistoricoPontos.add(HistoricoPontos(
            "Jardim das mães",
            "24/12/2022",
            "10",
            "positivo"
        ))
        this.listaHistoricoPontos.add(HistoricoPontos(
            "Jardim das mães",
            "24/12/2022",
            "10",
            "negativo"
        ))
        this.listaHistoricoPontos.add(HistoricoPontos(
            "Jardim das mães",
            "24/12/2022",
            "10",
            "positivo"
        ))
        this.listaHistoricoPontos.add(HistoricoPontos(
            "Jardim das mães",
            "24/12/2022",
            "10",
            "positivo"
        ))
        this.listaHistoricoPontos.add(HistoricoPontos(
            "Jardim das mães",
            "24/12/2022",
            "10",
            "positivo"
        ))
        this.listaHistoricoPontos.add(HistoricoPontos(
            "Jardim das mães",
            "24/12/2022",
            "10",
            "positivo"
        ))
        this.listaHistoricoPontos.add(HistoricoPontos(
            "Jardim das mães",
            "24/12/2022",
            "10",
            "positivo"
        ))
        this.listaHistoricoPontos.add(HistoricoPontos(
            "Jardim das mães",
            "24/12/2022",
            "10",
            "positivo"
        ))
        this.listaHistoricoPontos.add(HistoricoPontos(
            "Jardim das mães",
            "24/12/2022",
            "10",
            "positivo"
        ))
        this.listaHistoricoPontos.add(HistoricoPontos(
            "Jardim das mães",
            "24/12/2022",
            "10",
            "positivo"
        ))
        this.listaHistoricoPontos.add(HistoricoPontos(
            "Jardim das mães",
            "24/12/2022",
            "10",
            "positivo"
        ))
        this.listaHistoricoPontos.add(HistoricoPontos(
            "Jardim das mães",
            "24/12/2022",
            "10",
            "positivo"
        ))
        this.listaHistoricoPontos.add(HistoricoPontos(
            "Jardim das mães",
            "24/12/2022",
            "10",
            "positivo"
        ))
        this.listaHistoricoPontos.add(HistoricoPontos(
            "Jardim das mães",
            "24/12/2022",
            "10",
            "positivo"
        ))

    }
}
