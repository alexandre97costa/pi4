package pi4.main.Classes

class Sessao(id: String, dataHora : String, vagas: String) {
    val id: String
    val data: String
    val hora: String
    val vagas: String

    init {
        this.id = id
        this.data = splitData(dataHora)
        this.hora = splitHora(dataHora)
        this.vagas = vagas
    }

    private fun splitData(dataHora: String): String {
        return dataHora.split("T")[0]
    }

    private fun splitHora(dataHora: String): String {
        return dataHora.split("T")[1]
    }
}