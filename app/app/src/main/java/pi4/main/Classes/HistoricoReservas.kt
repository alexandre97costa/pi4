package pi4.main.Classes

class HistoricoReservas(titulo: String, estado: String, data: String) {
    val titulo:String
    val estado:String
    val data:String

    init {
        this.titulo = titulo
        this.estado = estado
        this.data = data
    }
}