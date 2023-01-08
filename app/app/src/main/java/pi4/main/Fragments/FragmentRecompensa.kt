package pi4.main.Fragments

import android.content.Intent
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import android.widget.Toast
import com.google.android.material.tabs.TabLayout
import pi4.main.Activitys.Historico.ActivityHistoricoPontos
import pi4.main.Classes.CategoriaLista
import pi4.main.Classes.Points
import pi4.main.R

class FragmentRecompensa : Fragment() {

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {
        return inflater.inflate(R.layout.fragment_recompensa, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        createCategoriasTab()
        loadPoints()
    }

    private fun loadPoints() {
        val textView = requireView().findViewById<TextView>(R.id.scoreUtilizador)

        val pontos = Points(998)

        pontos.loadPontos(textView)

        textView.setOnClickListener{
            startActivity(Intent(requireContext(), ActivityHistoricoPontos::class.java))
        }
    }

    private fun createCategoriasTab() {
        val tab = requireView().findViewById<TabLayout>(R.id.includedMenuCategoria)

        val arrayText = arrayListOf<String>("Todos", "Praias", "Jardim", "Monumentos", "Museu", "Restaurante")
        val arrayIconsNotFill = arrayListOf<Int>(R.drawable.location_notfill)
        val arrayIconsFill = arrayListOf<Int>(R.drawable.location_fill)

        val categorias = CategoriaLista(arrayIconsNotFill, arrayIconsFill, arrayText)
        categorias.insertCategorias(tab)

        createCategoriaListener(tab, categorias)
    }

    private fun createCategoriaListener(tabLayout: TabLayout, categoria: CategoriaLista) {
        tabLayout.addOnTabSelectedListener(object : TabLayout.OnTabSelectedListener {

            override fun onTabSelected(tab: TabLayout.Tab) {
                // Handle tab select
                categoria.changeIconOnSelected(tab, tab.id)
                Toast.makeText(requireContext(), "onTabSelected: ${tab.text}" , Toast.LENGTH_SHORT).show()
            }

            override fun onTabUnselected(tab: TabLayout.Tab) {
                // Handle tab unselect
                categoria.changeIconUnSelected(tab, tab.id)
                Toast.makeText(requireContext(),"${tab.id}", Toast.LENGTH_SHORT).show()
            }

            override fun onTabReselected(tab: TabLayout.Tab?) {
                // Handle tab reselect
            }
        })
    }

}