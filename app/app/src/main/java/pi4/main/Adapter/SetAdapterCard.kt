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
import androidx.core.content.ContextCompat
import com.google.android.material.card.MaterialCardView
import com.squareup.picasso.Picasso
import pi4.main.Activitys.PontoInteresse.ActivityPontoInteresseDetalhe
import pi4.main.Classes.PontoInteresse
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

        Picasso.get().load(recipe.image_url).into(imagemPontoInteresse)
        imagemPontoInteresse.contentDescription = recipe.nome
        pontoInteresse.text = recipe.nome
        categoria.text = recipe.tipo_interesse
        local.text = recipe.freguesia_municipio
        rating.text = recipe.avg_avaliacao.toString()
        score.text = recipe.num_pontos

        val card = rowView.findViewById<MaterialCardView>(R.id.card)

        card.setOnClickListener { teste(recipe.nome) }

        return rowView
    }

    fun teste(mensagem:String) {
        context.startActivity(Intent(context, ActivityPontoInteresseDetalhe::class.java))
    }
}