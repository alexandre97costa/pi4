package pi4.main.Activitys.Passeword

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import pi4.main.R

class ActivityRecuperarPasseword : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_recuperar_passeword)

        reenviar()
    }

    fun reenviar() {
        val buttonConfirmar = findViewById<Button>(R.id.buttonConfirmar)

        buttonConfirmar.setOnClickListener {
            startActivity(Intent(this, ActivityNovaPasseword::class.java))
        }
    }
}