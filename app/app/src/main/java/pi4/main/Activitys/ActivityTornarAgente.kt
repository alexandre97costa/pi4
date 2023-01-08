package pi4.main.Activitys

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.os.PersistableBundle
import android.widget.Adapter
import android.widget.AdapterView
import android.widget.ArrayAdapter
import android.widget.Button
import android.widget.Spinner
import android.widget.Toast
import pi4.main.MainActivity
import pi4.main.R

class ActivityTornarAgente : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_tornar_agente)

        guardar()

        val arraylist = ArrayList<String>()

        arraylist.add("Localidade")
        arraylist.add("Chile")
        arraylist.add("Grecia")
        arraylist.add("Viseu")
        arraylist.add("Portimao")
        arraylist.add("Portimao")
        arraylist.add("Portimao")
        arraylist.add("Portimao")
        arraylist.add("Portimao")
        arraylist.add("Portimao")
        arraylist.add("Portimao")
        arraylist.add("Portimao")
        arraylist.add("Portimao")
        arraylist.add("Portimao")
        arraylist.add("Portimao")

        val spinner:Spinner = findViewById(R.id.spinner)

        val simpleAdapter = ArrayAdapter(this, android.R.layout.simple_spinner_item, arraylist)
        simpleAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item)

        spinner.adapter = simpleAdapter
    }

    fun guardar() {
        val buttonGuardar = findViewById<Button>(R.id.btnGuardar)

        buttonGuardar.setOnClickListener {
            Toast.makeText(this, "Pedido efetuado com sucesso", Toast.LENGTH_SHORT).show()
            startActivity(Intent(this, MainActivity::class.java))
        }
    }
}
