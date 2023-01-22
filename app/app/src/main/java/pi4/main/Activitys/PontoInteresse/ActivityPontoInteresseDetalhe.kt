package pi4.main.Activitys.PontoInteresse

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.LinearLayout
import android.widget.TextView
import com.example.ficha8.Req
import com.google.android.material.floatingactionbutton.FloatingActionButton
import com.google.android.material.tabs.TabLayout
import org.json.JSONObject
import pi4.main.Adapter.SetAdapterCardComentarios
import pi4.main.Adapter.SetAdapterCardEvento
import pi4.main.Classes.Gestor
import pi4.main.Classes.Points
import pi4.main.Classes.StartActivitys
import pi4.main.Object.UserManager
import pi4.main.R

class ActivityPontoInteresseDetalhe : AppCompatActivity() {
    private val gestor = Gestor()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_ponto_interesse_detalhe)

        // id do ponto de interesse
        val id = intent.getStringExtra("pontoInteresseId").toString()

        previous()
        loadPontoInteresse(id)
        loadEventos(id)

        /*
        //Get Info Ponto interesse
        getExtraIntent()

        //Function de botões
        previous()
        maisComentarios()

        //Carregar o valor dos pontos de interesse
        loadPointsPontoInteresse()
        loadInfoPontoInteresse()

        //Carregar informação do ponto de interesse
        loadComentarios()
        loadEventos()
        *
         */
    }

    fun previous() {
        val floatingButton = findViewById<FloatingActionButton>(R.id.floatingActionButtonReturn)
        StartActivitys(this).floatingPreviousActivity(floatingButton, this)
    }

    fun loadPontoInteresse(id:String) {
        val pontos = findViewById<TextView>(R.id.scoreUtilizador)
        val nomePontoInteresse = findViewById<TextView>(R.id.textViewNomePontoInteresse)
        val categoria = findViewById<TextView>(R.id.textViewCategoria)
        val morada = findViewById<TextView>(R.id.textView_morada)
        val descricao = findViewById<TextView>(R.id.textView_txt_descricao)
        val agenteTuristico = findViewById<TextView>(R.id.textViewNomeAgenteTuristico)
        val rating = findViewById<TextView>(R.id.rating)

        Req.GET(
            "/pi/${id}",
            JSONObject("""{}"""),
            this,
            UserManager.getUtilizador()!!.getToken(),
            then = { res ->
                val data = res.getJSONArray("data")
                val pi_obj = data.getJSONObject(0)

                pontos.text = pi_obj.getString("pontos") + " pts"
                nomePontoInteresse.text = pi_obj.getString("nome")
                categoria.text = pi_obj.getJSONObject("tipo_interesse").getString("nome")
                morada.text = pi_obj.getString("morada")
                descricao.text = pi_obj.getString("descricao")
                agenteTuristico.text = pi_obj.getJSONObject("agente_turistico").getString("nome")
                rating.text = pi_obj.getDouble("avg_avaliacao").toFloat().toString()

                // pi_obj.getJSONArray("imagens").getString( 0) //img
                // pi_obj.getJSONObject("freguesia").getString("nome") //freguesia
            }
        )
    }

    fun loadEventos(id:String) {
        val tabLayout = findViewById<TabLayout>(R.id.tabLayoutEventos)
    }
    




    fun maisComentarios() {
        val verMais = findViewById<TextView>(R.id.textViewVerMaisComentarios)

        verMais.setOnClickListener{
            startActivity(Intent(this, ActivityComentarios::class.java)
                .putExtra("pontoInteresseId", gestor.pontoInteresse.getId()))
        }
    }

    fun loadComentarios() {
        gestor.pontoInteresse.getLimitComentarios(gestor.pontoInteresse.getId())

        callAdatperComentario()
    }

    fun callAdatperComentario() {
        //Mandamos aqui a lista de comentarios <pontoInteresse.listaComentarios>
        val customAdapter = SetAdapterCardComentarios(this, gestor.pontoInteresse.listaComentarios)
        val linearLayout = findViewById<LinearLayout>(R.id.linearLayoutComentarios)

        for (i in 0..customAdapter.count - 1)
            linearLayout.addView(customAdapter.getView(i, linearLayout, linearLayout))
    }

    fun loadEventos2() {
        gestor.pontoInteresse.getEventos(gestor.pontoInteresse.getId(), this)

        callAdapterEvento()
    }

    fun callAdapterEvento() {
        //Mandamos aqui a lista de comentarios <pontoInteresse.listaEventos>
        val customAdapter = SetAdapterCardEvento(this, gestor.pontoInteresse.listaEventos)
        val tabLayout = findViewById<TabLayout>(R.id.tabLayoutEventos)

        for (i in 0..customAdapter.count - 1)
            tabLayout.addTab(tabLayout.newTab().setCustomView(customAdapter.getView(i, tabLayout, tabLayout)))
    }
}