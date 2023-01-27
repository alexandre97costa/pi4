package pi4.main.Fragments

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ListView
import android.widget.TextView
import com.example.ficha8.Req
import com.google.android.material.floatingactionbutton.FloatingActionButton
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import org.json.JSONObject
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

            UserManager.setUtilizador(Utilizador(
                user,
                "",
                "",
                UserManager.getUtilizador()!!.getPasseword(),
                "",
                token
            ))

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
            loadPoints()
            previous()
            callAdapterCards()
        })
    }

    private fun loadPoints() {
        val textView = requireView().findViewById<TextView>(R.id.scoreUtilizador)

        Points(UserManager.getUtilizador()!!.getPontos().toInt(), textView, requireContext()).loadPontos()
    }

    private fun previous() {
        val floatingButton = requireView().findViewById<FloatingActionButton>(R.id.floatingActionButtonReturn)

        floatingButton.setOnClickListener{
            val fragmentManager = requireActivity().supportFragmentManager
            val fragmentTransaction = fragmentManager.beginTransaction()
            fragmentTransaction.replace(R.id.fragmentContainer, FragmentRecompensa())
            fragmentTransaction.commit()
        }
    }

    private fun callAdapterCards() {
        val listView = requireView().findViewById<ListView>(R.id.listViewRecompensasJaResgatadas)

        //Pedido API para ver as recompensas que o utilizador tem
        UserManager.getUtilizador()!!.getRecompensasJaResgatadas(requireContext(), listView)

    }
}