package pi4.main.Classes

class PontoInteresse(
    image_url:String,
    nome:String,
    morada: String,
    descricao: String,
    tipo_interesse:String,
    freguesia_municipio:String,
    num_pontos:String,
    avg_avaliacao:Float,
    count_scans: Int,
    agente_turistico: String
) {
    var image_url:String
    var nome:String
    var morada: String
    var descricao: String
    var tipo_interesse:String
    var freguesia_municipio:String
    var num_pontos:String
    var avg_avaliacao:Float
    var count_scans:Int
    var agente_turistico: String
    var listaEventos: ArrayList<Eventos> = arrayListOf()
    var listaComentarios: ArrayList<Comentarios> = arrayListOf()

    init {
        this.image_url = image_url
        this.nome = nome
        this.morada = morada
        this.descricao = descricao
        this.tipo_interesse = tipo_interesse
        this.freguesia_municipio = freguesia_municipio
        this.num_pontos = num_pontos
        this.avg_avaliacao = avg_avaliacao
        this.count_scans = count_scans
        this.agente_turistico = agente_turistico
    }

    fun loadEventos(pontoInteresseId: String) {
        //pedido api
        this.listaEventos.add(
            Eventos(
                "1",
            "Recital dos passaros",
                "24/12/2022",
            "Uma cena muito secante",
            20,
            26,
            3,
            "Museu"
            )
        )
        this.listaEventos.add(Eventos(
            "2",
            "Recital dos cães",
            "22/01/2023",
            "Uma cena muito, muito secante",
            15,
            22,
            1,
            "Museu"
        ))
    }

    fun loadComentarios(pontoInteresseId: String) {
        //pedido api
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
}