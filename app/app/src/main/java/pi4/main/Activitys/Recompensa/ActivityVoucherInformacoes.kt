package pi4.main.Activitys.Recompensa

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Button
import android.widget.TextView
import com.google.android.material.floatingactionbutton.FloatingActionButton
import pi4.main.Classes.Gestor
import pi4.main.Classes.Points
import pi4.main.Classes.StartActivitys
import pi4.main.R

class ActivityVoucherInformacoes : AppCompatActivity() {
    private val gestor = Gestor()
    private lateinit var recompensaId: String

    val pointsVoucher = 40

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_voucher_informacoes)

        getRecompensaId()
        loadPoints()
        previous()

        loadInformacaoOn()
        loadInformacaoOff()

        if (verificarSeJaFoiResgatado())
            includeRecompensaInfoOn()
        else {
            confirmPoints()
            resgatar()
        }
    }

    private fun getRecompensaId() {
        recompensaId = intent.getStringExtra("recompensaId").toString()
    }

    private fun loadPoints() {
        val textView = findViewById<TextView>(R.id.scoreUtilizador)

        Points(gestor.utilizador.getPontos().toInt(), textView, this).loadPontos()
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

        if(gestor.utilizador.getPontos().toInt() < pointsVoucher) {
            buttonResgatar.isEnabled = false
        buttonResgatar.setBackgroundResource(R.drawable.shape_gray.toInt())
        }
    }

    fun previous() {
        val floatingButton = findViewById<FloatingActionButton>(R.id.floatingActionButtonReturn)

        StartActivitys(this).floatingPreviousActivity(floatingButton, this)
    }

    fun loadInformacaoOn() {
        //Faz um pedido API ja com as novas informações
        val recompensa = gestor.getRecompensaId(recompensaId)

        //val recompensa = gestor.utilizador.getRecompensasJaResgatadasDetails(recompensaId)

        val titulo = findViewById<TextView>(R.id.textViewTituloOn)
        val descricao = findViewById<TextView>(R.id.textViewDescricaoOn)
        val pontos = findViewById<TextView>(R.id.textViewPontosOn)
        val codigo = findViewById<TextView>(R.id.textViewCodigo)

        titulo.text = recompensa.nomeRecompesa
        descricao.text = recompensa.descricao
        pontos.text = "${recompensa.pontos} pontos"
    }

    fun loadInformacaoOff() {
        val recompensa = gestor.getRecompensaId(recompensaId)

        val titulo = findViewById<TextView>(R.id.textViewTitulo)
        val descricao = findViewById<TextView>(R.id.textViewDescricao)
        val pontos = findViewById<TextView>(R.id.textViewPontos)

        titulo.text = recompensa.nomeRecompesa
        descricao.text = recompensa.descricao
        pontos.text = "${recompensa.pontos} pontos"
    }
}