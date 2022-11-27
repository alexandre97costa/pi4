package pi4.main.Classes

import android.widget.TextView

class Points(pontos: Int) {
    private val pontos:Int

    init {
        this.pontos = pontos
    }

    fun loadPontos(textView: TextView) {
        textView.setText("$pontos pts")
    }
}