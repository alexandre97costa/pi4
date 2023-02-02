package pi4.main.Activitys.QrCode

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import pi4.main.MainActivity
import pi4.main.R

class ActivityRejeitadoQR : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_rejeitado_qr)

        buttonClick()
    }

    fun buttonClick() {
        val buttonConfirmar: Button = findViewById(R.id.btnTentarNovamente)

        buttonConfirmar.setOnClickListener {
            startActivity(Intent(this, MainActivity::class.java))
        }
    }
}