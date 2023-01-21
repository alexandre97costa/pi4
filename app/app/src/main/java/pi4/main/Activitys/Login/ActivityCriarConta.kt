package pi4.main.Activitys.Login

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import com.google.android.material.floatingactionbutton.FloatingActionButton
import pi4.main.Classes.StartActivitys
import pi4.main.MainActivity
import pi4.main.R

class ActivityCriarConta : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_criar_conta)

        criar()
        entrar()
        previous()
    }

    fun criar() {
        val buttonCriar = findViewById<Button>(R.id.buttonCriar)

        buttonCriar.setOnClickListener {
            startActivity(Intent(this, MainActivity::class.java))
        }
    }

    fun entrar() {
        val textViewEntrar = findViewById<TextView>(R.id.textViewEntrar)

        textViewEntrar.setOnClickListener{
            startActivity(Intent(this, ActivityLogin::class.java))
        }
    }

    fun previous() {
        val floatingButton = findViewById<FloatingActionButton>(R.id.floatingActionButtonReturn)

        StartActivitys(this).floatingPreviousActivity(floatingButton, this)
    }
}