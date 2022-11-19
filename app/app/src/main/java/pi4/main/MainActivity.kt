package pi4.main

import android.graphics.Bitmap
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ListView

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val image = "https://images.trvl-media.com/lodging/13000000/12950000/12943100/12943018/ffe84ff0.jpg?impolicy=resizecrop&rw=670&ra=fit"

        val pontoInteresse1 = PontoInteresse( image, "Jardim das mães", "jardim", "local", "4.2", "20 pts")
        val pontoInteresse2 = PontoInteresse( image, "Palacio do gelo", "shopping", "local", "3.1", "10 pts")
        val pontoInteresse3 = PontoInteresse( image, "Forum viseu", "shopping", "local", "5", "120 pts")
        val pontoInteresse4 = PontoInteresse( image, "Agraria", "escola", "local", "1.6", "15 pts")

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