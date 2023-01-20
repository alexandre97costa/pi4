package pi4.main.Classes

class HistoricoReservas(nome: String, estado: String, data: String) {
    val nome:String
    val estado:String
    val data:String

    init {
        this.nome = nome
        this.estado = estado
        this.data = data
    }
}