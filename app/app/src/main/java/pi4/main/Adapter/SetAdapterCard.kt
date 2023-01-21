package pi4.main.Adapter

import android.content.Context
import android.content.Intent
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.BaseAdapter
import android.widget.ImageView
import android.widget.TextView
import android.widget.Toast
import androidx.cardview.widget.CardView
import androidx.core.content.ContextCompat
import androidx.core.content.ContextCompat.*
import com.google.android.material.card.MaterialCardView
import com.squareup.picasso.Picasso
import pi4.main.Activitys.PontoInteresse.ActivityPontoInteresseDetalhe
import pi4.main.Classes.Points
import pi4.main.Classes.PontoInteresse
import pi4.main.Classes.StartActivitys
import pi4.main.R

class SetAdapterCard(private val context: Context, private val data:ArrayList<PontoInteresse>): BaseAdapter() {

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
        val rowView = inflater.inflate(R.layout.card_ponto_interesse, parent, false)

        //Variaveis do layout
        val imagemPontoInteresse = rowView.findViewById<ImageView>(R.id.imagemPontoInteresse)
        val pontoInteresse = rowView.findViewById<TextView>(R.id.pontoInteresse)
        val categoria = rowView.findViewById<TextView>(R.id.categoria)
        val local = rowView.findViewById<TextView>(R.id.local)
        val rating = rowView.findViewById<TextView>(R.id.rating)
        val score = rowView.findViewById<TextView>(R.id.score)

        //Elemento do array
        val recipe = getItem(position) as PontoInteresse

        Picasso.get().load(recipe.getImageUrl()).into(imagemPontoInteresse)
        imagemPontoInteresse.contentDescription = recipe.getNome()
        pontoInteresse.text = recipe.getNome()
        categoria.text = recipe.getTipoInteresse()
        local.text = recipe.getFreguesia()
        rating.text = recipe.getAvgAvalicao().toString()

        Points(recipe.getNumPontos().toInt(), score, context).loadPontosPontoInteresse()

        val card = rowView.findViewById<MaterialCardView>(R.id.card)

        eventListener(card, recipe.getId())

        return rowView
    }

    fun eventListener(cardView: CardView, id: String) {
        cardView.setOnClickListener {
            context.startActivity(Intent(context, ActivityPontoInteresseDetalhe::class.java)
                .putExtra("pontoInteresseId", id))
        }
    }
}