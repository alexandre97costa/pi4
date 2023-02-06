package pi4.main.Activitys.Passeword

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.Button
import android.widget.EditText
import android.widget.Toast
import com.example.ficha8.Req
import com.google.android.material.floatingactionbutton.FloatingActionButton
import org.json.JSONObject
import pi4.main.Classes.StartActivitys
import pi4.main.MainActivity
import pi4.main.Object.UserManager
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
            val passeword1 = findViewById<EditText>(R.id.editTextPasse1)
            val passeword2 = findViewById<EditText>(R.id.editTextPasse2)
            Log.i("passeword1", passeword1.text.toString())
            Log.i("passeword2", passeword2.text.toString())

            if (passeword1.text.toString() != passeword2.text.toString())
                return@setOnClickListener Toast.makeText(this, "Conjunto diferente", Toast.LENGTH_SHORT).show()

            val path = "/utilizador/" + UserManager.getUtilizador()!!.getId() + "/password"
            val queryParams = JSONObject("""{}""")
            val requestBody = JSONObject("""{}""")
            requestBody.put("password", passeword1.text.toString())

            Req.PATCH(path, queryParams, requestBody, this, UserManager.getUtilizador()!!.getToken(), then = { res ->
                Toast.makeText(this, "Passeword atualizada", Toast.LENGTH_SHORT).show()

                UserManager.loginUtilizador(UserManager.getUtilizador()!!.getEmail(), passeword1.text.toString(), this)
            })
        }
    }

    fun previous() {
        val floatingButton = findViewById<FloatingActionButton>(R.id.floatingActionButtonReturn)

        StartActivitys(this).floatingPreviousActivity(floatingButton, this)
    }
}