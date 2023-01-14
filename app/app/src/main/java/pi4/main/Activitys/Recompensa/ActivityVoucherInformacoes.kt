package pi4.main.Activitys.Recompensa

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import pi4.main.Classes.Points
import pi4.main.Classes.StartActivitys
import pi4.main.MainActivity
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

        points = 998
        Points(points, textView, this).loadPontos()
    }

    fun resgatar() {
        val btnResgatar = findViewById<Button>(R.id.btnResgatar)

        StartActivitys(this).buttonGoTo(btnResgatar, MainActivity())
    }

    fun confirmPoints() {
        val buttonResgatar = findViewById<Button>(R.id.btnResgatar)

        val background = arrayListOf<Int>(R.drawable.shape_gray)

        if(points < pointsVoucher) {
            buttonResgatar.isEnabled = false
            buttonResgatar.setBackgroundResource(background[0])
        }
    }
}