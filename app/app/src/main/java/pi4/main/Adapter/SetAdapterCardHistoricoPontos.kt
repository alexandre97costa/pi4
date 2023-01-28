import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.BaseAdapter
import android.widget.TextView
import androidx.core.content.ContextCompat
import pi4.main.Classes.HistoricoPontos
import pi4.main.Classes.Points
import pi4.main.R

class SetAdapterCardHistoricoPontos(private val context: Context, private val data:ArrayList<HistoricoPontos>): BaseAdapter() {

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
        val rowView = inflater.inflate(R.layout.card_historico_pontos, parent, false)

        val pontoInteresse = rowView.findViewById<TextView>(R.id.textViewPontoInteresse)
        val data = rowView.findViewById<TextView>(R.id.textViewData)
        val pontos = rowView.findViewById<TextView>(R.id.textViewPontos)

        val recipe = getItem(position) as HistoricoPontos

        pontoInteresse.text = recipe.pontoInteresse
        Points(recipe.pontos.toInt(), pontos, context).loadPontosPontoInteresseHistorico(recipe.sentido)
        data.text = recipe.data

        if(recipe.sentido == true) {
            pontoInteresse.setTextColor(ContextCompat.getColor(context, R.color.greenPrincipal))
            pontos.setTextColor(ContextCompat.getColor(context, R.color.greenPrincipal))
        } else {
            pontoInteresse.setTextColor(ContextCompat.getColor(context, R.color.red))
            pontos.setTextColor(ContextCompat.getColor(context, R.color.red))
        }

        return rowView
    }
}