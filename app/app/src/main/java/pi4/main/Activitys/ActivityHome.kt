package pi4.main.Activitys

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import pi4.main.Activitys.Login.ActivityCriarConta
import pi4.main.Activitys.Login.ActivityLogin
import pi4.main.R

class ActivityHome : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_home)

        entrar()
        criarConta()
    }

    fun entrar() {
        val buttonEntrar =findViewById<Button>(R.id.buttonEntrar)

        buttonEntrar.setOnClickListener {
            startActivity(Intent(this, ActivityLogin::class.java))
        }
    }

    fun criarConta() {
        val buttonCriar =findViewById<Button>(R.id.buttonCriar)

        buttonCriar.setOnClickListener {
            startActivity(Intent(this, ActivityCriarConta::class.java))
        }
    }
}