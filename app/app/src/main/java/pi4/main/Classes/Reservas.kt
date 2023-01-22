package pi4.main.Classes

class Reservas(id:String, nomeReserva: String, numeroPessoas: String, validado: Boolean, nomeEvento: String, dataCompletaEvento: String, pontoInteresseId: String, codigo: String) {
    private val id: String
    private val nomeReserva: String
    private val numeroPessoas: String
    private val estado:String
    private val nomeEvento: String
    private val dataEvento: String
    private val horaEvento: String
    private val pontoInteresseId: String
    private val codigo: String

    init {
        this.id = id
        this.nomeReserva = nomeReserva
        this.numeroPessoas = numeroPessoas
        this.estado = getValidado(validado)
        this.nomeEvento = nomeEvento
        this.dataEvento = splitDataCompleta(dataCompletaEvento)
        this.horaEvento = splitHoraCompleta(dataCompletaEvento)
        this.pontoInteresseId = pontoInteresseId
        this.codigo = codigo
    }

    //BUSCAR INFORMAÇÃO SENSIVEL DA RESERVA
    fun getId(): String {
        return this.id
    }

    fun getNome(): String {
        return this.nomeReserva
    }

    fun getNumeroPessoas(): String {
        return this.numeroPessoas
    }

    fun getEstado(): String {
        return this.estado
    }

    fun getNomeEvento(): String {
        return this.nomeEvento
    }

    fun getDataEvento(): String {
        return this.dataEvento
    }

    fun getHoraEvento(): String {
        return this.horaEvento
    }

    fun getPontoInteresseId(): String {
        return this.pontoInteresseId
    }

    fun getCodigo(): String {
        return this.codigo
    }

    private fun getValidado(validado: Boolean): String {
        if (validado)
            return "Validado"

        return "Pendente"
    }

    private fun splitDataCompleta(data: String): String {
        return data.split("T")[0]
    }

    private fun splitHoraCompleta(data: String): String {
        val primeiraParte = data.split("T")[1]

        val hora = primeiraParte.split(":")[0]
        val minutos = primeiraParte.split(":")[1]

        return "${hora}h${minutos}"
    }

}