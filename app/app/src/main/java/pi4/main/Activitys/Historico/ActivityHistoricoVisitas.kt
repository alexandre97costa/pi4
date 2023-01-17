package pi4.main.Activitys.Historico

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ListView
import com.google.android.material.floatingactionbutton.FloatingActionButton
import pi4.main.Adapter.SetAdapterCardHistoricoVisitas
import pi4.main.Classes.HistoricoVisitas
import pi4.main.Classes.PontoInteresse
import pi4.main.Classes.StartActivitys
import pi4.main.R

class ActivityHistoricoVisitas : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_historico_visitas)

        callAdapterCards()
        previous()
    }

    fun callAdapterCards() {
        var arrayFinal: ArrayList<HistoricoVisitas> = arrayListOf()

        val objetoExemplo = HistoricoVisitas(
            image_url = "https://images.trvl-media.com/lodging/13000000/12950000/12943100/12943018/ffe84ff0.jpg?impolicy=resizecrop&rw=670&ra=fit",
            nome = "Jardim das Mães",
            morada =  "Largo Maj. Teles 6, 3500-212 Viseu",
            tipoInteresse = "Paisagem"
        )

        arrayFinal.add(objetoExemplo)
        arrayFinal.add(objetoExemplo)
        arrayFinal.add(objetoExemplo)
        arrayFinal.add(objetoExemplo)
        arrayFinal.add(objetoExemplo)
        arrayFinal.add(objetoExemplo)
        arrayFinal.add(objetoExemplo)
        arrayFinal.add(objetoExemplo)
        arrayFinal.add(objetoExemplo)
        arrayFinal.add(objetoExemplo)

        val customAdapter = SetAdapterCardHistoricoVisitas(this, arrayFinal)
        val listView = findViewById<ListView>(R.id.listViewHistoricoVisitas)
        listView.adapter = customAdapter
    }

    fun previous() {
        val floatingButton = findViewById<FloatingActionButton>(R.id.floatingActionButtonReturn)

        StartActivitys(this).floatingPreviousActivity(floatingButton, this)
    }
}