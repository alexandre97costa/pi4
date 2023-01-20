package pi4.main.Activitys.Recompensa

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Button
import android.widget.TextView
import com.google.android.material.floatingactionbutton.FloatingActionButton
import pi4.main.Classes.Points
import pi4.main.Classes.StartActivitys
import pi4.main.Classes.Utilizador
import pi4.main.R

class ActivityVoucherInformacoes : AppCompatActivity() {
    private var pointsVoucher: Int = 40

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_voucher_informacoes)

        loadPoints()
        previous()

        if (verificarSeJaFoiResgatado())
            includeRecompensaInfoOn()
        else {
            confirmPoints()
            resgatar()
        }
    }

    private fun loadPoints() {
        val textView = findViewById<TextView>(R.id.scoreUtilizador)

        //Points(Utilizador().pontos.toInt(), textView, this).loadPontos()
    }

    private fun verificarSeJaFoiResgatado(): Boolean {
        //Se vier true então ja é resgatado
        return intent.getBooleanExtra("flag", false)
    }

    private fun includeRecompensaInfoOn() {
        findViewById<View>(R.id.includeRecompensaInfoOff).visibility = View.GONE
        findViewById<View>(R.id.includeRecompensaInfoOn).visibility = View.VISIBLE
        findViewById<Button>(R.id.btnResgatar).visibility = View.GONE
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

        //if(Utilizador().pontos.toInt() < pointsVoucher) {
            //buttonResgatar.isEnabled = false
        // buttonResgatar.setBackgroundResource(R.drawable.shape_gray.toInt())
        }
    }

    fun previous() {
        //val floatingButton = findViewById<FloatingActionButton>(R.id.floatingActionButtonReturn)

        //StartActivitys(this).floatingPreviousActivity(floatingButton, this)
    }