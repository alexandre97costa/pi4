package pi4.main.Activitys

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.os.PersistableBundle
import android.widget.Adapter
import android.widget.AdapterView
import android.widget.ArrayAdapter
import android.widget.Spinner
import pi4.main.R

class ActivityTornarAgente : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_tornar_agente)

        val arraylist = ArrayList<String>()

        arraylist.add("Chile")
        arraylist.add("Grecia")
        arraylist.add("Viseu")
        arraylist.add("Portimao")

        val spinner:Spinner = findViewById(R.id.spinner)

        val aa = ArrayAdapter(this, android.R.layout.simple_spinner_item, arraylist)
        aa.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item)

        spinner.adapter = aa
    }
}
