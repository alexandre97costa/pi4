package pi4.main.Activitys.Passeword

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.Toast
import com.google.android.material.floatingactionbutton.FloatingActionButton
import pi4.main.Classes.StartActivitys
import pi4.main.MainActivity
import pi4.main.R

class ActivityNovaPasseword : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_nova_passeword)

        guardar()
        previous()
    }

    fun guardar() {
        val buttonGuardar = findViewById<Button>(R.id.buttonGuardar)

        buttonGuardar.setOnClickListener {

            Toast.makeText(this, "Passeword atualizada", Toast.LENGTH_SHORT).show()

            startActivity(Intent(this, MainActivity::class.java))
        }
    }

    fun previous() {
        val floatingButton = findViewById<FloatingActionButton>(R.id.floatingActionButtonReturn)

        StartActivitys(this).floatingPreviousActivity(floatingButton, this)
    }
}