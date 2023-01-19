package pi4.main.Fragments

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ListView
import android.widget.TextView
import androidx.constraintlayout.widget.ConstraintLayout
import androidx.fragment.app.FragmentManager
import com.google.android.material.tabs.TabLayout
import pi4.main.Adapter.SetAdapterCardRecompensa
import pi4.main.Classes.*
import pi4.main.R

class FragmentRecompensa : Fragment() {

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {
        return inflater.inflate(R.layout.fragment_recompensa, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        loadPoints()
        createCategoriasTab()
        buttonJaResgatado()
        callAdapterCards()
    }

    private fun buttonJaResgatado() {
        val button = requireView().findViewById<ConstraintLayout>(R.id.constraintLayoutJaResgatado)

        button.setOnClickListener {
            val fragmentManager:FragmentManager = requireActivity().supportFragmentManager
            val fragmentTransaction = fragmentManager.beginTransaction()
            fragmentTransaction.replace(R.id.fragmentContainer, FragmentRecompensaJaResgatada())
            fragmentTransaction.commit()
        }
    }

    private fun loadPoints() {
        val textView = requireView().findViewById<TextView>(R.id.scoreUtilizador)

        Points(Utilizador().pontos.toInt(), textView, requireContext()).loadPontos()
    }

    private fun createCategoriasTab() {
        val tab = requireView().findViewById<TabLayout>(R.id.includedMenuCategoria)

        CategoriaLista(tab, requireContext())
    }

    private fun callAdapterCards() {
        val arrayFinal: ArrayList<Recompensa> = arrayListOf()

        val objectExemplo = Recompensa(
            pontos = "80",
            recompensa = "Pizza Grátis",
            categoria = "Restauração"
        )

        val objectExemplo2 = Recompensa(
            pontos = "100",
            recompensa = "Café Grátis com direito a tudo incluido",
            categoria = "Comércio"
        )

        val objectExemplo3 = Recompensa(
            pontos = "40",
            recompensa = "Café Grátis com direito a tudo incluido",
            categoria = "Comércio"
        )

        arrayFinal.add(objectExemplo)
        arrayFinal.add(objectExemplo2)
        arrayFinal.add(objectExemplo3)

        val customAdapter = SetAdapterCardRecompensa(requireContext(), arrayFinal, false)
        val listView = requireView().findViewById<ListView>(R.id.listViewRecompensas)
        listView.adapter = customAdapter
    }
}