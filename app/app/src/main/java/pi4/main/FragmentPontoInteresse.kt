package pi4.main

import android.content.Context
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ListView

class FragmentPontoInteresse() : Fragment() {

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {
        return inflater.inflate(R.layout.fragment_ponto_interesse, container, false)
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        callAdatperCards(view)
        }

    fun callAdatperCards (view: View) {
        val image = "https://images.trvl-media.com/lodging/13000000/12950000/12943100/12943018/ffe84ff0.jpg?impolicy=resizecrop&rw=670&ra=fit"
        val image2 = "https://blog.emania.com.br/wp-content/uploads/2016/02/direitos-autorais-e-de-imagem.jpg"

        val pontoInteresse5 = PontoInteresse( image, "Santuário de Cristo Rei", "cristão", "Pragal, Almada, Portugal Almada, Cova da Piedade, Pragal e Cacilhas", "3.1", "200 pts")
        val pontoInteresse1 = PontoInteresse( image, "Jardim das mães", "jardim", "local", "4.2", "20 pts")
        val pontoInteresse2 = PontoInteresse( image, "Palacio do gelo", "shopping", "local", "3.1", "10 pts")
        val pontoInteresse3 = PontoInteresse( image, "Forum viseu", "shopping", "local", "5", "120 pts")
        val pontoInteresse4 = PontoInteresse( image, "Agraria", "escola", "local", "1.6", "15 pts")
        val pontoInteresse6 = PontoInteresse( image2, "Agraria", "escola", "local", "1.6", "15 pts")

        val array: ArrayList<PontoInteresse> = ArrayList()

        array.add(pontoInteresse1)
        array.add(pontoInteresse2)
        array.add(pontoInteresse3)
        array.add(pontoInteresse4)
        array.add(pontoInteresse6)
        array.add(pontoInteresse5)


        val customAdapter = SetAdapterCard(requireContext(), array)

        val listView = view.findViewById<ListView>(R.id.listViewTeste)

        listView.adapter = customAdapter
    }
}