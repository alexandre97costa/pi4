package pi4.main.Adapter

import android.content.Context
import android.content.Intent
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.BaseAdapter
import android.widget.ImageView
import android.widget.TextView
import androidx.cardview.widget.CardView
import androidx.constraintlayout.widget.ConstraintLayout
import com.google.android.material.card.MaterialCardView
import com.squareup.picasso.Picasso
import pi4.main.Activitys.PontoInteresse.ActivityPontoInteresseDetalhe
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
        val nome = rowView.findViewById<TextView>(R.id.pontoInteresse)
        val categoria = rowView.findViewById<TextView>(R.id.categoria)
        val local = rowView.findViewById<TextView>(R.id.local)

        val recipe = getItem(position) as HistoricoVisitas

        Picasso.get().load(recipe.image_url).into(imagem)
        nome.text = recipe.nomePontoInteresse
        categoria.text = recipe.tipoInteresse
        local.text = recipe.morada

        val card = rowView.findViewById<CardView>(R.id.cardViewVisitas)

        eventListener(card, recipe.id)

        return rowView
    }

    fun eventListener(cardView: CardView, id: String) {
        cardView.setOnClickListener {
            context.startActivity(Intent(context, ActivityPontoInteresseDetalhe::class.java)
                .putExtra("pontoInteresseId", id))
        }
    }
}