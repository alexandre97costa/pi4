package pi4.main.Activitys.Historico

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ListView
import pi4.main.Adapter.SetAdapterCardHistorico
import pi4.main.Classes.Historico
import pi4.main.R

class ActivityHistoricoReserva : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_historico_reserva)

        historicoReservasCard()
    }

    fun historicoReservasCard() {
        val arrayFinal = arrayListOf<Historico>()

        val reserva1 = Historico(
            titulo = "Recital das Aves",
            data = "27/12/2022",
            estado = "pendente"
        )

        val reserva2 = Historico(
            titulo = "Recital das Aves",
            data = "31/12/2022",
            estado = "valido"
        )

        val reserva3 = Historico(
            titulo = "Recital das Aves",
            data = "30/12/2022",
            estado = "rejeitado"
        )

        arrayFinal.add(reserva1)
        arrayFinal.add(reserva2)
        arrayFinal.add(reserva3)

        val customAdapter = SetAdapterCardHistorico(this, arrayFinal)
        val listView = findViewById<ListView>(R.id.listViewHistoricoReservas)
        listView.adapter = customAdapter
    }
}