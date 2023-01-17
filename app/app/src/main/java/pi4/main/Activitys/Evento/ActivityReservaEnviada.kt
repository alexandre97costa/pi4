package pi4.main.Activitys.Evento

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import com.google.android.material.floatingactionbutton.FloatingActionButton
import pi4.main.Classes.StartActivitys
import pi4.main.MainActivity
import pi4.main.R

class ActivityReservaEnviada : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_reserva_enviada)

        buttonContinuar()
    }

    fun buttonContinuar() {
        val buttonContinuar = findViewById<Button>(R.id.btnContinuar)

        buttonContinuar.setOnClickListener {
            startActivity(Intent(this, MainActivity::class.java))
        }
    }
}