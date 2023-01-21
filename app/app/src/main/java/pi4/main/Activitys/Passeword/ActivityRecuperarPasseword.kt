package pi4.main.Activitys.Passeword

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import com.google.android.material.floatingactionbutton.FloatingActionButton
import pi4.main.Classes.StartActivitys
import pi4.main.R

class ActivityRecuperarPasseword : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_recuperar_passeword)

        reenviar()
        previous()
    }

    fun reenviar() {
        val buttonConfirmar = findViewById<Button>(R.id.buttonConfirmar)

        buttonConfirmar.setOnClickListener {
            startActivity(Intent(this, ActivityNovaPasseword::class.java))
        }
    }

    fun previous() {
        val floatingButton = findViewById<FloatingActionButton>(R.id.floatingActionButtonReturn)

        StartActivitys(this).floatingPreviousActivity(floatingButton, this)
    }
}