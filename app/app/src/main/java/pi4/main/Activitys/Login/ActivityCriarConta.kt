package pi4.main.Activitys.Login

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.CheckBox
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast
import com.google.android.material.floatingactionbutton.FloatingActionButton
import pi4.main.Classes.Gestor
import pi4.main.Classes.StartActivitys
import pi4.main.MainActivity
import pi4.main.Object.UserManager
import pi4.main.R

class ActivityCriarConta : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_criar_conta)

        //Button actions
        btnCriar()
        btnPrevious()

        //Para criar conta
        criarConta()
    }

    fun btnCriar() {
        val buttonCriar = findViewById<Button>(R.id.buttonCriar)

        buttonCriar.setOnClickListener {
            startActivity(Intent(this, MainActivity::class.java))
        }
    }

    fun btnPrevious() {
        val floatingButton = findViewById<FloatingActionButton>(R.id.floatingActionButtonReturn)

        StartActivitys(this).floatingPreviousActivity(floatingButton, this)
    }

    fun criarConta() {
        val textViewEntrar = findViewById<TextView>(R.id.textViewEntrar)

        textViewEntrar.setOnClickListener{
            if (terms() == false)
                return@setOnClickListener Toast.makeText(this, "Necessita de aceitar os termos",Toast.LENGTH_SHORT).show()

            getEditText()

            startActivity(Intent(this, ActivityLogin::class.java))
        }
    }

    fun terms(): Boolean {
        val terms = findViewById<CheckBox>(R.id.checkBox)

        return terms.isChecked
    }

    fun getEditText() {
        val nome = findViewById<EditText>(R.id.editTextTextPersonName)
        val email = findViewById<EditText>(R.id.editTextTextEmailAddress)
        val passeword = findViewById<EditText>(R.id.editTextTextPassword)

        UserManager.postUtilizador(nome.toString(), email.toString(), passeword.toString(), this)
    }
}