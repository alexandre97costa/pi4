package pi4.main.Fragments

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ListView
import android.widget.TextView
import com.google.android.material.tabs.TabLayout
import pi4.main.Adapter.SetAdapterCardRecompensa
import pi4.main.Classes.CategoriaLista
import pi4.main.Classes.Points
import pi4.main.Classes.RecompensaCurta
import pi4.main.Classes.Utilizador
import pi4.main.R

class FragmentRecompensaJaResgatada : Fragment() {

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {
        return inflater.inflate(R.layout.fragment_recompensa_ja_resgatada, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        loadPoints()
        callAdapterCards()
    }

    private fun loadPoints() {
        val textView = requireView().findViewById<TextView>(R.id.scoreUtilizador)

        Points(Utilizador().pontos.toInt(), textView, requireContext()).loadPontos()
    }

    private fun callAdapterCards() {
        val arrayFinal: ArrayList<RecompensaCurta> = arrayListOf()

        val objectExemplo = RecompensaCurta(
            pontos = "100",
            recompensa = "Pizza Grátis",
            categoria = "Restauração"
        )

        val objectExemplo2 = RecompensaCurta(
            pontos = "52",
            recompensa = "Cinema Grátis",
            categoria = "Comércio"
        )

        arrayFinal.add(objectExemplo)
        arrayFinal.add(objectExemplo2)

        val customAdapter = SetAdapterCardRecompensa(requireContext(), arrayFinal, true)
        val listView = requireView().findViewById<ListView>(R.id.listViewRecompensasJaResgatadas)
        listView.adapter = customAdapter
    }
}