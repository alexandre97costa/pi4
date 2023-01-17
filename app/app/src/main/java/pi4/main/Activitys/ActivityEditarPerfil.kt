package pi4.main.Activitys

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast
import com.google.android.material.floatingactionbutton.FloatingActionButton
import pi4.main.Activitys.Passeword.ActivityRecuperarPasseword
import pi4.main.Classes.StartActivitys
import pi4.main.MainActivity
import pi4.main.R

class ActivityEditarPerfil : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_editar_perfil)

        loadPerfil()
        editarPasseword()
        guardar()
        previous()
    }

    fun loadPerfil() {
        val nome = findViewById<EditText>(R.id.editTextTextPersonName)
        val foto = findViewById<EditText>(R.id.editTextfoto)
        val email = findViewById<EditText>(R.id.editTextTextEmailAddress)

        nome.setText("Rúben Rebelo")
        foto.setText("Uma foto qualquer")
        email.setText("rebelo84@gmail.com")
    }

    fun editarPasseword() {
        val textViewEditarPasseword = findViewById<TextView>(R.id.textViewEditar)

        StartActivitys(this).textViewGoTo(textViewEditarPasseword, ActivityRecuperarPasseword())
    }

    fun guardar() {
        val buttonGuardar = findViewById<Button>(R.id.buttonGuardar)

        buttonGuardar.setOnClickListener {
            Toast.makeText(this, "Perfil atualizada", Toast.LENGTH_SHORT).show()

            StartActivitys(this).buttonGoToSemListener(MainActivity())
        }
    }

    fun previous() {
        val floatingButton = findViewById<FloatingActionButton>(R.id.floatingActionButtonReturn)

        StartActivitys(this).floatingPreviousActivity(floatingButton, this)
    }
}