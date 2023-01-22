package pi4.main.Activitys.Historico

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.ListView
import com.example.ficha8.Req
import com.google.android.material.floatingactionbutton.FloatingActionButton
import org.json.JSONObject
import pi4.main.Adapter.SetAdapterCardHistoricoReservas
import pi4.main.Classes.Eventos
import pi4.main.Classes.Reservas
import pi4.main.Classes.StartActivitys
import pi4.main.Object.UserManager
import pi4.main.R

class ActivityHistoricoReserva : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_historico_reserva)

        previous()

        //Pedido API
        loadHistoricoReservasCard()
    }

    fun loadHistoricoReservasCard() {
        UserManager.getUtilizador()!!.listaHistoricoReservas.clear()

        //Madar o id do utilizador
        val queryParams = JSONObject("""{}""")

        Req.GET("/reserva", queryParams, this, UserManager.getUtilizador()!!.getToken(), then = { res ->
            val data  = res.getJSONArray("data")

            for (i in 0..data.length()) {
                val objectRes = data.getJSONObject(i)

                UserManager.getUtilizador()!!.listaHistoricoReservas.add(Reservas(
                    objectRes.optInt("id").toString(),
                    objectRes.optString("nome"),
                    objectRes.optString("pessoas"),
                    objectRes.optBoolean("validado"),
                    objectRes.optJSONObject("sessao").optJSONObject("evento").optString("nome"),
                    objectRes.optJSONObject("sessao").optString("data_hora"),
                    objectRes.optString("codigo_confirmacao")
                ))
            }

            val customAdapter = SetAdapterCardHistoricoReservas(this, UserManager.getUtilizador()!!.listaHistoricoReservas)
            val listView = findViewById<ListView>(R.id.listViewHistoricoReservas)
            listView.adapter = customAdapter
        })
    }

    fun previous() {
        val floatingButton = findViewById<FloatingActionButton>(R.id.floatingActionButtonReturn)

        StartActivitys(this).floatingPreviousActivity(floatingButton, this)
    }
}