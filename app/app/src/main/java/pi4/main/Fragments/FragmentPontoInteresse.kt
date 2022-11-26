package pi4.main.Fragments

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ListView
import android.widget.Toast
import androidx.fragment.app.Fragment
import com.google.android.material.tabs.TabLayout
import pi4.main.Classes.PontoInteresse
import pi4.main.R
import pi4.main.Adapter.SetAdapterCard

class FragmentPontoInteresse() : Fragment() {

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {
        return inflater.inflate(R.layout.fragment_ponto_interesse, container, false)
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        callAdatperCards("Todos")
        testeCreateCategoriasTab()
    }

    private fun testeCreateCategoriasTab() {
        val tab = requireView().findViewById<TabLayout>(R.id.includedMenuCategoria)

        val arrayText = arrayListOf<String>("Todos", "Praias", "Jardim", "Monumentos", "Museu", "Restaurante")
        val arrayIcons = arrayListOf<Int>(R.drawable.location_notfill)

        for (i in 0..arrayText.count()-1)
            tab.addTab(tab.newTab().setText(arrayText[i]).setIcon(arrayIcons[0]))

        tab.addOnTabSelectedListener(object : TabLayout.OnTabSelectedListener {

            override fun onTabSelected(tab: TabLayout.Tab) {
                // Handle tab select
                Toast.makeText(requireContext(), "onTabSelected: ${tab.text}" , Toast.LENGTH_SHORT).show()
                tab.setIcon(R.drawable.qr)
                callAdatperCards(tab.text.toString())
            }

            override fun onTabUnselected(tab: TabLayout.Tab) {
                // Handle tab unselect
                tab.setIcon(R.drawable.location_notfill)
            }

            override fun onTabReselected(tab: TabLayout.Tab?) {
                // Handle tab reselect
            }
        })

    }

    private fun callAdatperCards(categoria:String) {
        val image = "https://images.trvl-media.com/lodging/13000000/12950000/12943100/12943018/ffe84ff0.jpg?impolicy=resizecrop&rw=670&ra=fit"
        val image2 = "https://blog.emania.com.br/wp-content/uploads/2016/02/direitos-autorais-e-de-imagem.jpg"

        val pontoInteresse5 = PontoInteresse( image, "Santuário de Cristo Rei", "Cristão", "Pragal, Almada, Portugal Almada, Cova da Piedade, Pragal e Cacilhas", "3.1", "200 pts")
        val pontoInteresse1 = PontoInteresse( image, "Jardim das mães", "Jardim", "local", "4.2", "20 pts")
        val pontoInteresse2 = PontoInteresse( image, "Palacio do gelo", "Shopping", "local", "3.1", "10 pts")
        val pontoInteresse3 = PontoInteresse( image, "Forum viseu", "Jardim", "local", "5", "120 pts")
        val pontoInteresse4 = PontoInteresse( image, "Agraria", "Escola", "local", "1.6", "15 pts")
        val pontoInteresse6 = PontoInteresse( image2, "Agraria", "Jardim", "local", "1.6", "15 pts")
        val pontoInteresse7 = PontoInteresse( image2, "mimi", "Restaurante", "visabona", "1.6", "800 pts")

        val array: ArrayList<PontoInteresse> = ArrayList()

        array.add(pontoInteresse1)
        array.add(pontoInteresse2)
        array.add(pontoInteresse3)
        array.add(pontoInteresse4)
        array.add(pontoInteresse6)
        array.add(pontoInteresse5)
        array.add(pontoInteresse7)

        val arrayFinal: ArrayList<PontoInteresse> = ArrayList()

        for(i in 0 .. array.count() - 1) {
            if(array[i].categoria == categoria)
                arrayFinal.add(array[i])

            if(categoria == "Todos")
                arrayFinal.add(array[i])
        }

        val customAdapter = SetAdapterCard(requireContext(), arrayFinal)

        val listView = requireView().findViewById<ListView>(R.id.listView)

        listView.adapter = customAdapter
    }
}