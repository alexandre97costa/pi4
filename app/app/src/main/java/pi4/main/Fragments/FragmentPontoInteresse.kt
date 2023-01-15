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
import pi4.main.Classes.PontoInteresse
import pi4.main.R
import pi4.main.Adapter.SetAdapterCard
import pi4.main.Classes.CategoriaLista
import pi4.main.Classes.Points

class FragmentPontoInteresse() : Fragment() {

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {
        return inflater.inflate(R.layout.fragment_ponto_interesse, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        callAdapterCards("Todos")
        createCategoriasTab()
        loadPoints()
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

        Points(998, textView, requireContext()).loadPontos()
    }

    private fun createCategoriasTab() {
        val tab = requireView().findViewById<TabLayout>(R.id.includedMenuCategoria)

        CategoriaLista(tab, requireContext())
    }

    private fun callAdapterCards(categoria:String) {
        //val arrayFinal: ArrayList<PontoInteresse> = stringRequestPontosInteresse(categoria)

        var arrayFinal:ArrayList<PontoInteresse> = arrayListOf()

        val objetoExemplo = PontoInteresse(
            image_url = "https://images.trvl-media.com/lodging/13000000/12950000/12943100/12943018/ffe84ff0.jpg?impolicy=resizecrop&rw=670&ra=fit",
            nome = "Jardim das Mães",
            morada =  "Largo Maj. Teles 6, 3500-212 Viseu",
            descricao = "Um jardim muito bonito",
            tipo_interesse = "Paisagem",
            freguesia_municipio = "Viseu",
            num_pontos = "10 pts",
            avg_avaliacao = 4.8f,
            count_scans = 2,
            agente_turistico = "José"
        )

        arrayFinal.add(objetoExemplo)

        val customAdapter = SetAdapterCard(requireContext(), arrayFinal)
        val listView = requireView().findViewById<ListView>(R.id.listView)
        listView.adapter = customAdapter

        /*fun ResponseToArrayList(res:JSONObject){
            arrayFinal = res
                .getJSONArray("data")
                .let { 0.until(it.length()).map { i -> it.optJSONObject(i) } }
                .map { pi -> PontoInteresse(
                    // image_url
                    // pi.getJSONArray("imagens").getJSONObject(0).getString("url")
                    // todo failsafe de quando nao ha imagens no array
                    "https://images.trvl-media.com/lodging/13000000/12950000/12943100/12943018/ffe84ff0.jpg?impolicy=resizecrop&rw=670&ra=fit",
                    // nome
                    pi.getString("nome"),
                    // morada
                    pi.getString("morada"),
                    // descricao
                    pi.getString("descricao"),
                    // tipo_interesse
                    pi.getJSONObject("tipo_interesse").getString("nome"),
                    // freguesia_municipio
                    pi.getJSONObject("freguesia").getString("nome") + ", " +
                            pi.getJSONObject("freguesia").getJSONObject("municipio").getString("nome"),
                    // pontos
                    pi.getInt("num_pontos").toString() + " pts",
                    // avg_avaliacao
                    pi.getDouble("avg_avaliacao").toFloat(),
                    // count_scans
                    pi.getInt("count_scans"),
                    // agente_turistico
                    pi.getJSONObject("agente_turistico").getString("nome")
                ) }
                .toCollection(ArrayList())

            val customAdapter = SetAdapterCard(requireContext(), arrayFinal)
            val listView = requireView().findViewById<ListView>(R.id.listView)
            listView.adapter = customAdapter
        }

        // todo: filtros
        val queryParams = JSONObject("""{}""")
        val requestBody = JSONObject("""{}""")

        Req().GET("/pontoInteresse", queryParams, requestBody, requireContext(), then = { res ->
            ResponseToArrayList(res)
        })

        // val image = "https://images.trvl-media.com/lodging/13000000/12950000/12943100/12943018/ffe84ff0.jpg?impolicy=resizecrop&rw=670&ra=fit"
        // val image2 = "https://blog.emania.com.br/wp-content/uploads/2016/02/direitos-autorais-e-de-imagem.jpg" */

    }
}