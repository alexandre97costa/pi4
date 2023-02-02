package pi4.main.Adapter

import android.content.Context
import android.content.Intent
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.BaseAdapter
import android.widget.TextView
import androidx.cardview.widget.CardView
import pi4.main.Activitys.Evento.ActivityEventoDetalhe
import pi4.main.Classes.Eventos
import pi4.main.Classes.Points
import pi4.main.R

class SetAdapterCardEvento(private val context: Context, private val data:ArrayList<Eventos>): BaseAdapter() {

    private val inflater: LayoutInflater = context.getSystemService(Context.LAYOUT_INFLATER_SERVICE) as LayoutInflater

    override fun getCount(): Int {
        return data.size
    }

    override fun getItem(position: Int): Any {
        return data[position]
    }

    override fun getItemId(position: Int): Long {
        return position.toLong()
    }

    override fun getView(position: Int, convertView: View?, parent: ViewGroup?): View {
        val rowView = inflater.inflate(R.layout.card_evento, parent, false)

        val nome = rowView.findViewById<TextView>(R.id.textViewNome)
        val categoria = rowView.findViewById<TextView>(R.id.textViewcategoria)
        val data = rowView.findViewById<TextView>(R.id.textViewData)
        val pontos = rowView.findViewById<TextView>(R.id.textViewPontos)

        val card = rowView.findViewById<CardView>(R.id.cardEvento)

        val recipe = getItem(position) as Eventos

        nome.text = recipe.nome
        categoria.text = recipe.tipoEvento

        Log.i("listaSessao", recipe.listaSessoes.toString())

        if (recipe.listaSessoes.count() != 0)
            data.text = recipe.listaSessoes[0].data
        else {
            data.visibility = View.INVISIBLE
            rowView.findViewById<TextView>(R.id.textViewMaisData).visibility = View.INVISIBLE
        }
        Points(recipe.numPontos, pontos, context).loadPontosPontoInteresse()

        addEventListener(recipe.id, recipe.pontoInteresseId,card)

        return rowView
    }

    private fun addEventListener(id: String, pontoInteresseId: String, cardView: CardView) {
        cardView.setOnClickListener{
            context.startActivity(Intent(context, ActivityEventoDetalhe::class.java)
                .putExtra("eventoId", id)
                .putExtra("pontoInteresseId", pontoInteresseId))
        }
    }
}