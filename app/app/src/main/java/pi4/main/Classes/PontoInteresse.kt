package pi4.main.Classes

import android.content.Context
import com.example.ficha8.Req
import com.google.android.material.tabs.TabLayout
import org.json.JSONObject
import pi4.main.Adapter.SetAdapterCardEvento
import pi4.main.Object.UserManager

class PontoInteresse(
    id: String,
    image_url:String,
    nome:String,
    morada: String,
    descricao: String,
    tipo_interesse:String,
    freguesia_municipio:String,
    num_pontos:String,
    avg_avaliacao:Float,
    agente_turistico: String
) {
    private var id: String
    private var image_url: String
    private var nome: String
    private var morada: String
    private var descricao: String
    private var tipo_interesse:String
    private var freguesia_municipio:String
    private var num_pontos: String
    private var avg_avaliacao: Float
    private var agente_turistico: String

    //criação das listas
    var listaEventos: ArrayList<Eventos> = arrayListOf()
    var listaComentarios: ArrayList<Comentarios> = arrayListOf()

    //TEMOS SEMPRE DE AO CHAMAR A CLASS MANDAR ESTE ELEMENTOS
    init {
        this.id = id
        this.image_url = image_url
        this.nome = nome
        this.morada = morada
        this.descricao = descricao
        this.tipo_interesse = tipo_interesse
        this.freguesia_municipio = freguesia_municipio
        this.num_pontos = num_pontos
        this.avg_avaliacao = avg_avaliacao
        this.agente_turistico = agente_turistico
    }

    //GET DADOS SENSIVEIS DO PONTO DE INTERESSE
    fun getId(): String {
        return this.id
    }

    fun getImageUrl(): String {
        return this.image_url
    }

    fun getNome(): String {
        return this.nome
    }

    fun getMorada(): String {
        return this.morada
    }

    fun getDescricao(): String {
        return this.descricao
    }

    fun getTipoInteresse(): String {
        return this.tipo_interesse
    }

    fun getFreguesia(): String {
        return this.freguesia_municipio
    }

    fun getNumPontos(): String {
        return this.num_pontos
    }

    fun getAvgAvalicao(): Float {
        return this.avg_avaliacao
    }

    fun getAgenteTuristico(): String {
        return this.agente_turistico
    }

    //PEDIDOS API
    fun getDetailsEvento(eventoId: String): Eventos {
        //Fazer pedido API
        //Exemplo de return
        return listaEventos[eventoId.toInt() - 1]
    }

    fun getAllComentarios(id: String) {
        //Limpar arrayList antes de fazer um pedido API
        listaComentarios.clear()

        //exemplo pedido api
        this.listaComentarios.add(Comentarios(
            "Joaquim Sousa",
            "Um sitio incrivel",
            "4.1"
        ))
        this.listaComentarios.add(Comentarios(
            "Maria Amalia",
            "Um sitio impecavel",
            "4.9"
        ))
        this.listaComentarios.add(Comentarios(
            "Jocas",
            "Um sitio que nunca vou esquecer",
            "4.87"
        ))
        this.listaComentarios.add(Comentarios(
            "Mara",
            "Um sitio para voltar",
            "3.2"
        ))
    }

    fun getLimitComentarios(id: String) {
        //Limpar antes de começar para termos acerteza que não tem informação nenhuma anterior
        listaComentarios.clear()


        this.listaComentarios.add(Comentarios(
            "Joaquim Sousa",
            "Um sitio incrivel",
            "4.1"
        ))
        this.listaComentarios.add(Comentarios(
            "Maria Amalia",
            "Um sitio impecavel",
            "4.9"
        ))
    }
}