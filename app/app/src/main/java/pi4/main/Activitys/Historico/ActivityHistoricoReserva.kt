package pi4.main.Activitys.Historico

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ListView
import android.widget.TextView
import com.google.android.material.floatingactionbutton.FloatingActionButton
import pi4.main.Activitys.Login.ActivityLogin
import pi4.main.Adapter.SetAdapterCardHistoricoReservas
import pi4.main.Classes.Gestor
import pi4.main.Classes.HistoricoReservas
import pi4.main.Classes.StartActivitys
import pi4.main.Object.UserManager
import pi4.main.R

class ActivityHistoricoReserva : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_historico_reserva)

        historicoReservasCard()
        previous()
    }

    fun historicoReservasCard() {
        //Fazer pedido API
        UserManager.getUtilizador()!!.getHistocoReservas(UserManager.getUtilizador()!!.getId())

        val customAdapter = SetAdapterCardHistoricoReservas(this, UserManager.getUtilizador()!!.listaHistoricoReservas)
        val listView = findViewById<ListView>(R.id.listViewHistoricoReservas)
        listView.adapter = customAdapter
    }

    fun previous() {
        val floatingButton = findViewById<FloatingActionButton>(R.id.floatingActionButtonReturn)

        StartActivitys(this).floatingPreviousActivity(floatingButton, this)
    }
}