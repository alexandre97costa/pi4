package pi4.main.Fragments

import android.os.Bundle
import android.text.Editable
import android.text.TextWatcher
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.EditText
import android.widget.ListView
import android.widget.TextView
import androidx.fragment.app.Fragment
import com.google.android.material.tabs.TabLayout
import pi4.main.R
import pi4.main.Adapter.SetAdapterCard
import pi4.main.Classes.*
import pi4.main.Object.UserManager

class FragmentPontoInteresse() : Fragment() {
    private val gestor = Gestor()

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {
        return inflater.inflate(R.layout.fragment_ponto_interesse, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        loadPoints()

        callAdapterCards("Todos")
        createCategoriasTab()
        searchBar()
    }

    private fun searchBar() {
        val editText = requireView().findViewById<EditText>(R.id.editTextSearch)

        createTextListener(editText)
    }

    private fun createTextListener(textInputEditText: EditText) {
        textInputEditText.addTextChangedListener(object : TextWatcher {
            override fun afterTextChanged(s: Editable?) {
            }
            override fun beforeTextChanged(s: CharSequence?, start: Int, count: Int, after: Int) {
            }
            override fun onTextChanged(s: CharSequence?, start: Int, before: Int, count: Int) {
                if(textInputEditText.text.toString() != "")
                    callAdapterCards(textInputEditText.text.toString())
                else
                    callAdapterCards("Todos")
            }
        })
    }

    private fun loadPoints() {
        val textView = requireView().findViewById<TextView>(R.id.scoreUtilizador)

        Points(UserManager.getUtilizador()?.getPontos()?.toInt() ?: 0, textView, requireContext()).loadPontos()
    }

    private fun createCategoriasTab() {
        val tab = requireView().findViewById<TabLayout>(R.id.includedMenuCategoria)

        CategoriaLista(tab, requireContext())
    }

     fun callAdapterCards(categoria:String) {
        val listView = requireView().findViewById<ListView>(R.id.listView)

        gestor.getAllPontosInteresse(requireContext(), listView, true)
    }
}