package pi4.main.Activitys.Historico

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ListView
import com.google.android.material.floatingactionbutton.FloatingActionButton
import pi4.main.Adapter.SetAdapterCardHistoricoVisitas
import pi4.main.Classes.Gestor
import pi4.main.Classes.HistoricoVisitas
import pi4.main.Classes.PontoInteresse
import pi4.main.Classes.StartActivitys
import pi4.main.R

class ActivityHistoricoVisitas : AppCompatActivity() {
    private val gestor = Gestor()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_historico_visitas)

        callAdapterCards()
        previous()
    }

    fun callAdapterCards() {
        gestor.utilizador.getListaHistoricoVisitas(gestor.utilizador.getId())

        val customAdapter = SetAdapterCardHistoricoVisitas(this, gestor.utilizador.listaHistoricoVisitas)
        val listView = findViewById<ListView>(R.id.listViewHistoricoVisitas)
        listView.adapter = customAdapter
    }

    fun previous() {
        val floatingButton = findViewById<FloatingActionButton>(R.id.floatingActionButtonReturn)

        StartActivitys(this).floatingPreviousActivity(floatingButton, this)
    }
}