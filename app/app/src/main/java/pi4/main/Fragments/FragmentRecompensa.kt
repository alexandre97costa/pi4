package pi4.main.Fragments

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import android.widget.Toast
import androidx.cardview.widget.CardView
import androidx.constraintlayout.widget.ConstraintLayout
import androidx.fragment.app.FragmentManager
import com.google.android.material.tabs.TabLayout
import pi4.main.Activitys.Recompensa.ActivityVoucherInformacoes
import pi4.main.Classes.CategoriaLista
import pi4.main.Classes.Points
import pi4.main.Classes.StartActivitys
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
        exemploRecompensa()
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

        Points(998, textView, requireContext()).loadPontos()
    }

    private fun createCategoriasTab() {
        val tab = requireView().findViewById<TabLayout>(R.id.includedMenuCategoria)

        CategoriaLista(tab, requireContext())
    }

    private fun exemploRecompensa() {
        val cardRecompensa = requireView().findViewById<CardView>(R.id.cardViewRecompensa)

        StartActivitys(requireContext()).cardGoTo(cardRecompensa, ActivityVoucherInformacoes())
    }
}