package pi4.main.Classes

import android.content.Context
import android.widget.TextView
import pi4.main.Activitys.Historico.ActivityHistoricoPontos

class Points(pontos: Int, textView: TextView, context: Context) {
    private val pontos:Int
    private val textView: TextView
    private val context: Context

    init {
        this.pontos = pontos
        this.textView = textView
        this.context = context
    }

    fun loadPontos() {
        textView.setText("$pontos pts")
        startActivityHistorico()
    }

    fun loadPontosPorExtenso() {
        textView.setText("$pontos pontos")
    }

    fun loadPontosPontoInteresse() {
        textView.setText("$pontos pts")
    }

    fun loadPontosPontoInteresseCurto() {
        textView.setText("$pontos")
    }

    fun loadPontosPontoInteresseHistorico(sentido: Boolean) {
        if(sentido == true)
            return textView.setText("+$pontos pts")

        textView.setText("-$pontos pts")
    }

    private fun startActivityHistorico() {
        StartActivitys(context).textViewGoTo(textView, ActivityHistoricoPontos())
    }
}