package pi4.main.Fragments

import android.os.Bundle
import android.util.Log
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ListView
import android.widget.TextView
import androidx.constraintlayout.widget.ConstraintLayout
import androidx.fragment.app.FragmentManager
import com.example.ficha8.Req
import com.google.android.material.tabs.TabLayout
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import org.json.JSONObject
import pi4.main.Adapter.SetAdapterCardRecompensa
import pi4.main.Classes.*
import pi4.main.Object.UserManager
import pi4.main.R

class FragmentRecompensa : Fragment() {
    private val gestor = Gestor()
    private var categoriaId: String = ""

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {
        return inflater.inflate(R.layout.fragment_recompensa, container, false)
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
            buttonJaResgatado()
            createCategoriasTab() //Verificar
            callAdapterCards()
        })
    }

    private fun loadPoints() {
        val textView = requireView().findViewById<TextView>(R.id.scoreUtilizador)

        Points(UserManager.getUtilizador()!!.getPontos().toInt(), textView, requireContext()).loadPontos()
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

    private fun createCategoriasTab() {
        val tab = requireView().findViewById<TabLayout>(R.id.includedMenuCategoria)

        CategoriaLista(tab, requireContext()).createCategoriaListener(
            funcao = {
                this.categoriaId = it.toString()

                callAdapterCards()
            }
        )
    }

    private fun callAdapterCards() {
        val listView = requireView().findViewById<ListView>(R.id.listViewRecompensas)

        gestor.fragmentRecompensasListar(requireContext(), listView, categoriaId)
    }
}