package pi4.main.Activitys

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast
import com.example.ficha8.Req
import com.google.android.material.floatingactionbutton.FloatingActionButton
import org.json.JSONObject
import pi4.main.Activitys.Passeword.ActivityNovaPasseword
import pi4.main.Activitys.Passeword.ActivityRecuperarPasseword
import pi4.main.Classes.Gestor
import pi4.main.Classes.StartActivitys
import pi4.main.MainActivity
import pi4.main.Object.UserManager
import pi4.main.R

class ActivityEditarPerfil : AppCompatActivity() {
    private lateinit var nome: EditText
    private lateinit var email: EditText

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_editar_perfil)

        nome = findViewById<EditText>(R.id.editTextTextPersonName)
        email = findViewById<EditText>(R.id.editTextTextEmailAddress)

        loadPerfil()
        editarPasseword()
        guardar()
        previous()
    }

    private fun loadPerfil() {
        nome.setText(UserManager.getUtilizador()?.getNome() ?: "Nome vazio")
        email.setText(UserManager.getUtilizador()?.getEmail() ?: "Email vazio")
    }

    private fun editarPasseword() {
        val textViewEditarPasseword = findViewById<TextView>(R.id.textViewEditar)

        StartActivitys(this).textViewGoTo(textViewEditarPasseword, ActivityNovaPasseword())
    }

    private fun guardar() {
        val buttonGuardar = findViewById<Button>(R.id.buttonGuardar)

        buttonGuardar.setOnClickListener {
            Log.i("nome", nome.text.toString())
            Log.i("email", email.text.toString())

            val queryParams = JSONObject("""{}""")
            val requestBody = JSONObject()
            requestBody.put("nome", nome.text.toString())
            requestBody.put("email", email.text.toString())
            requestBody.put("data_nascimento", "2001-09-28")

            Req.PUT("/utilizador/${UserManager.getUtilizador()!!.getId()}", queryParams, requestBody, this, UserManager.getUtilizador()!!.getToken(), then = { res ->
                Toast.makeText(this, "Perfil atualizada", Toast.LENGTH_SHORT).show()

                UserManager.getUtilizador()!!.setEmail(email.text.toString())
                UserManager.getUtilizador()!!.setNome(nome.text.toString())
                //StartActivitys(this).buttonGoToSemListener(MainActivity())
            })
        }
    }

    private fun previous() {
        val floatingButton = findViewById<FloatingActionButton>(R.id.floatingActionButtonReturn)

        StartActivitys(this).floatingPreviousActivity(floatingButton, this)
    }
}