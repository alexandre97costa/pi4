package pi4.main.Activitys

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import android.widget.Toast
import pi4.main.Activitys.Passeword.ActivityRecuperarPasseword
import pi4.main.MainActivity
import pi4.main.R

class ActivityEditarPerfil : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_editar_perfil)

        editarPasseword()
        guardar()
    }

    fun editarPasseword() {
        val textViewEditarPasseword = findViewById<TextView>(R.id.textViewEditar)

        textViewEditarPasseword.setOnClickListener{
            startActivity(Intent(this, ActivityRecuperarPasseword::class.java))
        }
    }

    fun guardar() {
        val buttonGuardar = findViewById<Button>(R.id.buttonGuardar)

        buttonGuardar.setOnClickListener {

            Toast.makeText(this, "Passeword atualizada", Toast.LENGTH_SHORT).show()

            startActivity(Intent(this, MainActivity::class.java))
        }
    }
}