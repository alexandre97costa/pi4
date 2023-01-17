package pi4.main.Activitys.Recompensa

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Button
import android.widget.TextView
import pi4.main.Classes.Points
import pi4.main.Classes.Utilizador
import pi4.main.R

class ActivityVoucherInformacoes : AppCompatActivity() {
    private var points: Int = 0
    private var pointsVoucher: Int = 80

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_voucher_informacoes)

        loadPoints()
        resgatar()
        confirmPoints()
    }

    private fun loadPoints() {
        val textView = findViewById<TextView>(R.id.scoreUtilizador)

        Points(Utilizador().pontos.toInt(), textView, this).loadPontos()
    }

    fun resgatar() {
        val btnResgatar = findViewById<Button>(R.id.btnResgatar)

        btnResgatar.setOnClickListener {
            findViewById<View>(R.id.includeRecompensaInfoOff).visibility = View.GONE
            findViewById<View>(R.id.includeRecompensaInfoOn).visibility = View.VISIBLE
            btnResgatar.visibility = View.GONE
        }
    }

    fun confirmPoints() {
        val buttonResgatar = findViewById<Button>(R.id.btnResgatar)

        if(points < pointsVoucher) {
            buttonResgatar.isEnabled = false
            buttonResgatar.setBackgroundResource(R.drawable.shape_gray.toInt())
        }
    }
}