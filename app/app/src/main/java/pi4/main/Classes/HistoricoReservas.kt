package pi4.main.Classes

class HistoricoReservas(id:String, nomeReserva: String, telefone: String, numeroPessoas: String, estado: String ,evento: Eventos, pontoInteresseId: String) {
    private val id: String
    private val nomeReserva: String
    private val telefone: String
    private val numeroPessoas: String
    private val estado:String
    private val evento: Eventos
    private val pontoInteresseId: String

    init {
        this.id = id
        this.nomeReserva = nomeReserva
        this.telefone = telefone
        this.numeroPessoas = numeroPessoas
        this.estado = estado
        this.evento = evento
        this.pontoInteresseId = pontoInteresseId
    }

    //BUSCAR INFORMAÇÃO SENSIVEL DA RESERVA
    fun getId(): String {
        return this.id
    }

    fun getNome(): String {
        return this.nomeReserva
    }

    fun getTelefone(): String {
        return this.telefone
    }

    fun getNumeroPessoas(): String {
        return this.numeroPessoas
    }

    fun getEstado(): String {
        return this.estado
    }

    fun getEvento(): Eventos {
        return this.evento
    }

    fun getPontoInteresseId(): String {
        return this.pontoInteresseId
    }

}