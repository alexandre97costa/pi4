package pi4.main.Fragments

import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.TextView
import androidx.fragment.app.Fragment
import com.example.ficha8.Req
import kotlinx.coroutines.*
import org.json.JSONObject
import pi4.main.Activitys.ActivityEditarPerfil
import pi4.main.Activitys.ActivityTornarAgente
import pi4.main.Activitys.Historico.ActivityHistoricoReserva
import pi4.main.Activitys.Historico.ActivityHistoricoVisitas
import pi4.main.Classes.StartActivitys
import pi4.main.Classes.Utilizador
import pi4.main.Object.UserManager
import pi4.main.R

class FragmentPerfil : Fragment() {
    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {
        return inflater.inflate(R.layout.fragment_perfil, container, false)
    }

    override fun onResume() {
        super.onResume()

        loginUtilizador()
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        loginUtilizador()
    }

    private fun loginUtilizador() {
        val queryParams = JSONObject("""{}""")
        val requestBody = JSONObject()

        //Adiciona elementos para o requestBody
        requestBody.put("email", UserManager.getUtilizador()!!.getEmail())
        requestBody.put("password", UserManager.getUtilizador()!!.getPasseword())

        //LOGIN
        Req.POST("/utilizador/login", queryParams, requestBody, requireContext(), "", then = { response ->
            val token = response.optString("token")
            val user = response.optString("user")

            UserManager.setUtilizador(
                Utilizador(
                user,
                "",
                "",
                UserManager.getUtilizador()!!.getPasseword(),
                "",
                token
            )
            )

            atualizarUtilizador()
        })
    }

    private fun atualizarUtilizador() {
        val queryParams = JSONObject("""{}""")
        val path = "/utilizador/${UserManager.getUtilizador()!!.getId()}"

        Req.GET(path, queryParams, requireContext(), UserManager.getUtilizador()!!.getToken(), then = { res ->
            val data = res.optJSONArray("data")
            val user = data.optJSONObject(0)

            UserManager.setUtilizador(Utilizador(
                user.optString("id"),
                user.optString("nome"),
                user.optString("email"),
                UserManager.getUtilizador()!!.getPasseword(),
                user.optString("pontos"),
                UserManager.getUtilizador()!!.getToken()
            ))

            //ESPAÇO PARA CONTINUAR A PAGINA
            loadInfoUtilizador()
            activitysButton()
        })
    }

    fun loadInfoUtilizador() {
        val nome = requireView().findViewById<TextView>(R.id.textViewNomeUtilizador)
        val email = requireView().findViewById<TextView>(R.id.textViewEmailUtilizador)

        nome.text = UserManager.getUtilizador()!!.getNome()
        email.text = UserManager.getUtilizador()!!.getEmail()
    }

    fun activitysButton() {
        val buttonEditar = requireView().findViewById<Button>(R.id.buttonEditar)
        val buttonReserva = requireView().findViewById<Button>(R.id.buttonReservar)
        val buttonHistorico = requireView().findViewById<Button>(R.id.buttonHistorico)
        val buttonTornarAgente = requireView().findViewById<Button>(R.id.buttonTornarAgente)
        val buttonTermos = requireView().findViewById<Button>(R.id.buttonTermos)

        StartActivitys(requireContext()).buttonGoTo(buttonEditar, ActivityEditarPerfil())
        StartActivitys(requireContext()).buttonGoTo(buttonReserva, ActivityHistoricoReserva())
        StartActivitys(requireContext()).buttonGoTo(buttonHistorico, ActivityHistoricoVisitas())
        StartActivitys(requireContext()).buttonGoTo(buttonTornarAgente, ActivityTornarAgente())

        buttonTermos.setOnClickListener {
            //Mudar o ip para apresentacao
            startActivity(Intent(Intent.ACTION_VIEW, Uri.parse("https://pi4-microsite.herokuapp.com/termos-utilizacao")))
        }

    }
}