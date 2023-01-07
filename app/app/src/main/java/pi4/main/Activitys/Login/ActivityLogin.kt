package pi4.main.Activitys.Login

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import pi4.main.Activitys.Passeword.ActivityRecuperarPasseword
import pi4.main.MainActivity
import pi4.main.R

class ActivityLogin : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)

        login()
        criarConta()
        recuperar()
    }

    fun login() {
        val buttonLogin = findViewById<Button>(R.id.buttonEntrar)

        buttonLogin.setOnClickListener {
            startActivity(Intent(this, MainActivity::class.java))
        }
    }

    fun criarConta() {
        val textViewCriarConta = findViewById<TextView>(R.id.textViewCriarConta)

        textViewCriarConta.setOnClickListener{
            startActivity(Intent(this, ActivityCriarConta::class.java))
        }
    }

    fun recuperar() {
        val textViewCriarRecuperarPasseword = findViewById<TextView>(R.id.textViewRecuperar)

        textViewCriarRecuperarPasseword.setOnClickListener{
            startActivity(Intent(this, ActivityRecuperarPasseword::class.java))
        }
    }
}