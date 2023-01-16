package pi4.main.Adapter

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.BaseAdapter
import android.widget.TextView
import androidx.cardview.widget.CardView
import androidx.constraintlayout.widget.ConstraintLayout
import pi4.main.Activitys.PontoInteresse.ActivityPontoInteresseDetalhe
import pi4.main.Activitys.Recompensa.ActivityVoucherInformacoes
import pi4.main.Classes.Points
import pi4.main.Classes.RecompensaCurta
import pi4.main.Classes.StartActivitys
import pi4.main.R

class SetAdapterCardRecompensa(private val context: Context, private val data:ArrayList<RecompensaCurta>): BaseAdapter() {
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
        val rowView = inflater.inflate(R.layout.card_recompensa, parent, false)

        val pontos = rowView.findViewById<TextView>(R.id.recompensaspontos)
        val pontoInteresse = rowView.findViewById<TextView>(R.id.pontoInteresse)
        val categoria = rowView.findViewById<TextView>(R.id.categoria)

        val recipe = getItem(position) as RecompensaCurta

        Points(recipe.pontos.toInt(), pontos, context).loadPontosPontoInteresse()
        pontoInteresse.text = recipe.pontoInteresse
        categoria.text = recipe.categoria

        val card = rowView.findViewById<CardView>(R.id.cardViewRecompensa)

        eventListener(card, recipe.pontoInteresse)

        return rowView
    }

    fun eventListener(cardView: CardView, mensagem:String) {
        StartActivitys(context).cardGoTo(cardView, ActivityVoucherInformacoes())
    }
}