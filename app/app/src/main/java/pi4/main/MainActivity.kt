package pi4.main

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ListView
import android.widget.Toast
import com.google.android.material.bottomnavigation.BottomNavigationView
import com.google.android.material.navigation.NavigationBarView

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        callAdatperCards()
        detectMenu()
    }

    fun callAdatperCards () {
        val image = "https://images.trvl-media.com/lodging/13000000/12950000/12943100/12943018/ffe84ff0.jpg?impolicy=resizecrop&rw=670&ra=fit"
        val image2 = "https://blog.emania.com.br/wp-content/uploads/2016/02/direitos-autorais-e-de-imagem.jpg"

        val pontoInteresse5 = PontoInteresse( image, "Santuário de Cristo Rei", "cristão", "Pragal, Almada, Portugal Almada, Cova da Piedade, Pragal e Cacilhas", "3.1", "200 pts")
        val pontoInteresse1 = PontoInteresse( image, "Jardim das mães", "jardim", "local", "4.2", "20 pts")
        val pontoInteresse2 = PontoInteresse( image, "Palacio do gelo", "shopping", "local", "3.1", "10 pts")
        val pontoInteresse3 = PontoInteresse( image, "Forum viseu", "shopping", "local", "5", "120 pts")
        val pontoInteresse4 = PontoInteresse( image, "Agraria", "escola", "local", "1.6", "15 pts")
        val pontoInteresse6 = PontoInteresse( image2, "Agraria", "escola", "local", "1.6", "15 pts")

        var array: ArrayList<PontoInteresse> = ArrayList()

        array.add(pontoInteresse1)
        array.add(pontoInteresse2)
        array.add(pontoInteresse3)
        array.add(pontoInteresse4)
        array.add(pontoInteresse6)
        array.add(pontoInteresse5)

        val customAdapter = SetAdapterCard(this, array)

        val listView = findViewById<ListView>(R.id.listViewTeste)

        listView.adapter = customAdapter
    }

    fun detectMenu() {

        val nav: BottomNavigationView = findViewById(R.id.bottom_navigation)

        nav.setOnItemSelectedListener(NavigationBarView.OnItemSelectedListener { item ->
            when(item.itemId) {
                R.id.pontoInteresseMenu -> {
                    Toast.makeText(this, "pontoInteresseMenu", Toast.LENGTH_LONG)
                    true
                }
                R.id.recompensaMenu -> {
                    Toast.makeText(this, "recompensaMenu", Toast.LENGTH_LONG)
                    true
                }
                else -> false
            }
        })

    }
}