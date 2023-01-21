package pi4.main.Activitys.Login

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import com.google.android.material.floatingactionbutton.FloatingActionButton
import pi4.main.Activitys.Passeword.ActivityRecuperarPasseword
import pi4.main.Classes.Gestor
import pi4.main.Classes.StartActivitys
import pi4.main.MainActivity
import pi4.main.Object.UserManager
import pi4.main.R

class ActivityLogin : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)

        btnCriarConta()
        btnRecuperar()
        btnPrevious()

        login()
    }

    fun btnCriarConta() {
        val textViewCriarConta = findViewById<TextView>(R.id.textViewCriarConta)

        textViewCriarConta.setOnClickListener{
            startActivity(Intent(this, ActivityCriarConta::class.java))
        }
    }

    fun btnRecuperar() {
        val textViewCriarRecuperarPasseword = findViewById<TextView>(R.id.textViewRecuperar)

        textViewCriarRecuperarPasseword.setOnClickListener{
            startActivity(Intent(this, ActivityRecuperarPasseword::class.java))
        }
    }

    fun btnPrevious() {
        val floatingButton = findViewById<FloatingActionButton>(R.id.floatingActionButtonReturn)

        StartActivitys(this).floatingPreviousActivity(floatingButton, this)
    }

    fun login() {
        val buttonLogin = findViewById<Button>(R.id.buttonEntrar)

        buttonLogin.setOnClickListener {
            getEditText()

            startActivity(Intent(this, MainActivity::class.java))
        }
    }

    fun getEditText() {
        val email = findViewById<EditText>(R.id.editTextTextPersonName)
        val passeword = findViewById<EditText>(R.id.editTextTextPassword)

        Log.i("email", email.text.toString())
        Log.i("passeword", passeword.text.toString())

        UserManager.loginUtilizador(email.text.toString(), passeword.text.toString(), this)
    }
}