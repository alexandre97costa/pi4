package pi4.main.Activitys.Recompensa

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import pi4.main.MainActivity
import pi4.main.R

class ActivityVoucherInformacoes : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_voucher_informacoes)

        resgatar()
    }

    fun resgatar() {
        val btnResgatar = findViewById<Button>(R.id.btnResgatar)

        btnResgatar.setOnClickListener {
            startActivity(Intent(this, MainActivity::class.java))
        }
    }
}