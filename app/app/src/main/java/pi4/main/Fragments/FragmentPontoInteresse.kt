package pi4.main.Fragments

import android.os.Bundle
import android.text.Editable
import android.text.TextWatcher
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.EditText
import android.widget.ListView
import android.widget.TextView
import androidx.fragment.app.Fragment
import com.example.ficha8.Req
import com.google.android.material.tabs.TabLayout
import org.json.JSONObject
import pi4.main.R
import pi4.main.Classes.*
import pi4.main.Object.UserManager

class FragmentPontoInteresse() : Fragment() {
    private val gestor = Gestor()
    private var categoriaId: String = ""
    private var nome: String = ""

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {
        return inflater.inflate(R.layout.fragment_ponto_interesse, container, false)
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
            searchBar()
            createCategoriasTab()
            callAdapterCards()
        })
    }

    private fun loadPoints() {
        val textView = requireView().findViewById<TextView>(R.id.scoreUtilizador)

        Points(UserManager.getUtilizador()?.getPontos()?.toInt() ?: 0, textView, requireContext()).loadPontos()
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
                nome = textInputEditText.text.toString()

                callAdapterCards()
            }
        })
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

    fun callAdapterCards() {
        val listView = requireView().findViewById<ListView>(R.id.listView)

        gestor.getAllPontosInteresse(requireContext(), listView, true, nome, categoriaId)
    }
}