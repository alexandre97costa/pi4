package pi4.main

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
}