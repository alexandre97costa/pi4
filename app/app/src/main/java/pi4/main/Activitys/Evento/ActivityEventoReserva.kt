package pi4.main.Activitys.Evento

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast
import pi4.main.R

class ActivityEventoReserva : AppCompatActivity() {
    var numeroMaximoPessoas: Int? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_evento_reserva)

        //+1 devido a margem de erro de 1
        numeroMaximoPessoas = 10 + 1
        numeroPessoas()

        buttonReservar()
    }

    //Vai buscar as informações sobre a reserva do cliente
    fun buttonReservar() {
        val buttonReservar = findViewById<Button>(R.id.buttonReservar)

        buttonReservar.setOnClickListener {
            val editTextNome = findViewById<EditText>(R.id.editTextTextNome)
            val editTextTelefone = findViewById<EditText>(R.id.editTextTextTelefone)
            val textViewNumeroPessoas = findViewById<TextView>(R.id.textViewNumeroPessoas)

            Log.i("Nome:", editTextNome.text.toString())
            Log.i("Telefone:", editTextTelefone.text.toString())
            Log.i("NumeroPessoas:", textViewNumeroPessoas.text.toString())

            startActivity(Intent(this, ActivityReservaEnviada::class.java))
        }
    }

    fun numeroPessoas() {
        val buttonMais = findViewById<Button>(R.id.maisButton)
        val buttonMenos = findViewById<Button>(R.id.menosButton)

        buttonMais.setOnClickListener {
            actionButton(1)
        }

        buttonMenos.setOnClickListener {
            actionButton(-1)
        }
    }

    fun actionButton(operation: Int) {
        val textViewNumeroPessoas = findViewById<TextView>(R.id.textViewNumeroPessoas)
        var numeroPessoas = textViewNumeroPessoas.text.toString().toInt()
        Log.i("Inicio numeroPessoas: ", numeroPessoas.toString())

        if(operation == 1) {
            numeroPessoas = numeroPessoas + 1
            Log.i("Add numeroPessoas: ", numeroPessoas.toString())
        } else {
            numeroPessoas = numeroPessoas - 1
            Log.i("Menos numeroPessoas: ", numeroPessoas.toString())
        }

        if(verifyNumero(numeroPessoas) == true)
            textViewNumeroPessoas.text = numeroPessoas.toString()
    }

    fun verifyNumero(numeroPessoas: Int): Boolean {
        //0 devido a margem de erro
        if(numeroPessoas == 0) {
            Toast.makeText(this, "Número minimo de pessoas atingido", Toast.LENGTH_SHORT).show()
            return false
        }

        if(numeroPessoas == numeroMaximoPessoas) {
            Toast.makeText(this, "Número máximo de pessoas atingido", Toast.LENGTH_SHORT).show()
            return false
        }

        return true
    }
}