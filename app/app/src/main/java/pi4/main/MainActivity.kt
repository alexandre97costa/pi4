package pi4.main

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ListView

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val pontoInteresse1 = PontoInteresse("Jardim das mães", "jardim", "local", "4.2", "20 pts")
        val pontoInteresse2 = PontoInteresse("Palacio do gelo", "shopping", "local", "3.1", "10 pts")
        val pontoInteresse3 = PontoInteresse("Forum viseu", "shopping", "local", "5", "120 pts")
        val pontoInteresse4 = PontoInteresse("Agraria", "escola", "local", "1.6", "15 pts")

        var array: ArrayList<PontoInteresse> = ArrayList()

        array.add(pontoInteresse1)
        array.add(pontoInteresse2)
        array.add(pontoInteresse3)
        array.add(pontoInteresse4)

        val customAdapter = SetAdapterCard(this, array)

        val listView = findViewById<ListView>(R.id.listViewTeste)

        listView.adapter = customAdapter
    }
}