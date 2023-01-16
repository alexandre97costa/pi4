package pi4.main.Activitys.Evento

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.Toast
import com.google.android.material.floatingactionbutton.FloatingActionButton
import pi4.main.Classes.StartActivitys
import pi4.main.MainActivity
import pi4.main.R

class ActivityEventoDetalhe : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_evento_detalhe)

        previous()
        reservar()
    }

    fun reservar() {
        val btnReservar = findViewById<Button>(R.id.btnReserva)

        btnReservar.setOnClickListener {
            startActivity(Intent(this, ActivityEventoReserva::class.java))
        }
    }

    fun previous() {
        val floatingButton = findViewById<FloatingActionButton>(R.id.floatingActionButtonReturn)

        StartActivitys(this).floatingPreviousActivity(floatingButton, this)
    }
}