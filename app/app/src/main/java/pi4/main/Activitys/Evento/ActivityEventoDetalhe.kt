package pi4.main.Activitys.Evento

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.Toast
import pi4.main.MainActivity
import pi4.main.R

class ActivityEventoDetalhe : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_evento_detalhe)

        reservar()
    }

    fun reservar() {
        val btnReservar = findViewById<Button>(R.id.btnReserva)

        btnReservar.setOnClickListener {
            startActivity(Intent(this, ActivityEventoReserva::class.java))
        }
    }
}