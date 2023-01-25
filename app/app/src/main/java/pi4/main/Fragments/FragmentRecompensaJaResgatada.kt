package pi4.main.Fragments

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ListView
import android.widget.TextView
import com.google.android.material.floatingactionbutton.FloatingActionButton
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import pi4.main.Adapter.SetAdapterCardRecompensa
import pi4.main.Classes.*
import pi4.main.Object.UserManager
import pi4.main.R

class FragmentRecompensaJaResgatada : Fragment() {
    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {
        return inflater.inflate(R.layout.fragment_recompensa_ja_resgatada, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        GlobalScope.launch(Dispatchers.Main) {
            UserManager.atualizarUtillizador(requireContext()).await()
            loadPoints()
        }

        callAdapterCards()
        previous()
    }

    private fun loadPoints() {
        val textView = requireView().findViewById<TextView>(R.id.scoreUtilizador)

        Points(UserManager.getUtilizador()!!.getPontos().toInt(), textView, requireContext()).loadPontos()
    }

    private fun callAdapterCards() {
        //Pedido API para ver as recompensas que o utilizador tem
        UserManager.getUtilizador()!!.getRecompensasJaResgatadas(UserManager.getUtilizador()!!.getId())

        val customAdapter = SetAdapterCardRecompensa(requireContext(), UserManager.getUtilizador()!!.listaRecompensasJaResgatadas, true)
        val listView = requireView().findViewById<ListView>(R.id.listViewRecompensasJaResgatadas)
        listView.adapter = customAdapter
    }

    fun previous() {
        val floatingButton = requireView().findViewById<FloatingActionButton>(R.id.floatingActionButtonReturn)

        floatingButton.setOnClickListener{
            val fragmentManager = requireActivity().supportFragmentManager
            val fragmentTransaction = fragmentManager.beginTransaction()
            fragmentTransaction.replace(R.id.fragmentContainer, FragmentRecompensa())
            fragmentTransaction.commit()
        }
    }
}