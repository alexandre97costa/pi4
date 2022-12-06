package pi4.main

import android.content.res.ColorStateList
import android.graphics.Bitmap
import android.graphics.Color
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ArrayAdapter
import android.widget.ListView
import androidx.viewpager2.widget.ViewPager2
import com.google.android.material.tabs.TabLayout
import com.google.android.material.tabs.TabLayoutMediator

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

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

        val categoria1 = CategoriaLista(image, "teste")
        val categoria2 = CategoriaLista(image, "teste2")
        val categoria3 = CategoriaLista(image, "teste3")
        val categoria4 = CategoriaLista(image, "teste4")
        val categoria5 = CategoriaLista(image, "teste5")
        val categoria6 = CategoriaLista(image, "teste6")


        val tab = findViewById<TabLayout>(R.id.tabLayout)

    }
}