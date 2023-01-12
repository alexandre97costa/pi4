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
        startActivityHistorico()
    }

    fun loadPontos() {
        textView.setText("$pontos pts")
    }

    fun startActivityHistorico() {
        StartActivitys(context).textViewGoTo(textView, ActivityHistoricoPontos())
    }
}