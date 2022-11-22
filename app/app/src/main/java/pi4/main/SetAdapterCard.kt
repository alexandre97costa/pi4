package pi4.main

import android.content.Context
import android.graphics.drawable.Drawable
import android.net.Uri
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.BaseAdapter
import android.widget.ImageView
import android.widget.TextView
import androidx.core.content.getSystemService
import androidx.core.net.toUri
import com.squareup.picasso.Picasso
import java.net.URI
import java.util.logging.Level.parse

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
        val rowView = inflater.inflate(R.layout.activity_card_ponto_interesse, parent, false)

        //Variaveis do layout
        val imagemPontoInteresse = rowView.findViewById<ImageView>(R.id.imagemPontoInteresse)
        val pontoInteresse = rowView.findViewById<TextView>(R.id.pontoInteresse)
        val categoria = rowView.findViewById<TextView>(R.id.categoria)
        val local = rowView.findViewById<TextView>(R.id.local)
        val rating = rowView.findViewById<TextView>(R.id.rating)
        val score = rowView.findViewById<TextView>(R.id.score)

        //Elemento do array
        val recipe = getItem(position) as PontoInteresse

        imagemPontoInteresse.contentDescription = recipe.pontoInteresse

        Picasso.get().load(recipe.imageUrl).into(imagemPontoInteresse)

        pontoInteresse.text = recipe.pontoInteresse
        categoria.text = recipe.categoria
        local.text = recipe.local
        rating.text = recipe.rating
        score.text = recipe.score

        return rowView
    }
}