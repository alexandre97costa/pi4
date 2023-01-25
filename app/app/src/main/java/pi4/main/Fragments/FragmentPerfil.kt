package pi4.main.Fragments

import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.TextView
import androidx.fragment.app.Fragment
import kotlinx.coroutines.*
import pi4.main.Activitys.ActivityEditarPerfil
import pi4.main.Activitys.ActivityTornarAgente
import pi4.main.Activitys.Historico.ActivityHistoricoReserva
import pi4.main.Activitys.Historico.ActivityHistoricoVisitas
import pi4.main.Classes.StartActivitys
import pi4.main.Object.UserManager
import pi4.main.R

class FragmentPerfil : Fragment() {
    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {
        return inflater.inflate(R.layout.fragment_perfil, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        GlobalScope.launch(Dispatchers.Main) {
            UserManager.atualizarUtillizador(requireContext()).await()
            loadInfoUtilizador()
            activitysButton()
        }
    }

    fun loadInfoUtilizador() {
        Log.d("loadInfoUtilizador", "2")

        val nome = requireView().findViewById<TextView>(R.id.textViewNomeUtilizador)
        val email = requireView().findViewById<TextView>(R.id.textViewEmailUtilizador)

        nome.text = UserManager.getUtilizador()!!.getNome()
        email.text = UserManager.getUtilizador()!!.getEmail()
    }

    fun activitysButton() {
        Log.d("activitysButton", "3")

        val buttonEditar = requireView().findViewById<Button>(R.id.buttonEditar)
        val buttonReserva = requireView().findViewById<Button>(R.id.buttonReservar)
        val buttonHistorico = requireView().findViewById<Button>(R.id.buttonHistorico)
        val buttonTornarAgente = requireView().findViewById<Button>(R.id.buttonTornarAgente)
        val buttonTermos = requireView().findViewById<Button>(R.id.buttonTermos)

        StartActivitys(requireContext()).buttonGoTo(buttonEditar, ActivityEditarPerfil())
        StartActivitys(requireContext()).buttonGoTo(buttonReserva, ActivityHistoricoReserva())
        StartActivitys(requireContext()).buttonGoTo(buttonHistorico, ActivityHistoricoVisitas())
        StartActivitys(requireContext()).buttonGoTo(buttonTornarAgente, ActivityTornarAgente())

    }
}