package pi4.main.Adapter

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.BaseAdapter
import android.widget.ImageView
import android.widget.TextView
import androidx.constraintlayout.widget.ConstraintLayout
import com.squareup.picasso.Picasso
import pi4.main.Classes.HistoricoVisitas
import pi4.main.R

class SetAdapterCardHistoricoVisitas(private val context: Context, private val data:ArrayList<HistoricoVisitas>): BaseAdapter() {

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
        val rowView = inflater.inflate(R.layout.card_historico_visitas, parent, false)

        val imagem = rowView.findViewById<ImageView>(R.id.imageViewPontoInteresse)
        val nome = rowView.findViewById<TextView>(R.id.textViewNomePontoInteresse)
        val categoria = rowView.findViewById<TextView>(R.id.texViewCategoria)
        val local = rowView.findViewById<TextView>(R.id.textViewLocal)

        val recipe = getItem(position) as HistoricoVisitas

        Picasso.get().load(recipe.image_url).into(imagem)
        nome.text = recipe.nome
        categoria.text = recipe.tipoInteresse
        local.text = recipe.morada

        return rowView
    }
}