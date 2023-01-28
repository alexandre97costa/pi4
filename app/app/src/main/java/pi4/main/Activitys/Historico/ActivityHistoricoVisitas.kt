package pi4.main.Activitys.Historico

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.ListView
import com.example.ficha8.Req
import com.google.android.material.floatingactionbutton.FloatingActionButton
import org.json.JSONObject
import pi4.main.Adapter.SetAdapterCardHistoricoVisitas
import pi4.main.Classes.Gestor
import pi4.main.Classes.HistoricoVisitas
import pi4.main.Classes.PontoInteresse
import pi4.main.Classes.StartActivitys
import pi4.main.Object.UserManager
import pi4.main.R

class ActivityHistoricoVisitas : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_historico_visitas)

        previous()

        loadHistoricoVisitas()
    }

    fun previous() {
        val floatingButton = findViewById<FloatingActionButton>(R.id.floatingActionButtonReturn)

        StartActivitys(this).floatingPreviousActivity(floatingButton, this)
    }

    fun loadHistoricoVisitas() {
        UserManager.getUtilizador()!!.listaHistoricoVisitas.clear()

        val path = "/historico/pontos_interesse/" + UserManager.getUtilizador()!!.getId()
        val queryParams = JSONObject("""{}""")

        Req.GET(path, queryParams, this, UserManager.getUtilizador()!!.getToken(), then = { res ->

            Log.i("Visitas", res.optString("output"))

            val data = res.optJSONArray("output")

            for (i in 0..data.length() - 1) {
                val objectRes = data.getJSONObject(i)

                UserManager.getUtilizador()!!.listaHistoricoVisitas.add(HistoricoVisitas(
                    objectRes.optInt("id").toString(),
                    objectRes.optString("imagem"),
                    objectRes.optString("nome"),
                    objectRes.optString("morada"),
                    objectRes.optString("tipo_interesse")
                ))
            }

            val customAdapter = SetAdapterCardHistoricoVisitas(this, UserManager.getUtilizador()!!.listaHistoricoVisitas)
            val listView = findViewById<ListView>(R.id.listViewHistoricoVisitas)
            listView.adapter = customAdapter
        })
    }
}