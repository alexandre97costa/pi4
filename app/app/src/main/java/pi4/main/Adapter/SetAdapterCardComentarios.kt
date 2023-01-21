package pi4.main.Adapter

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.BaseAdapter
import android.widget.TextView
import pi4.main.Classes.Comentarios
import pi4.main.R

class SetAdapterCardComentarios(private val context: Context, private val data:ArrayList<Comentarios>): BaseAdapter() {

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
        val rowView = inflater.inflate(R.layout.card_comentario, parent, false)

        val utilizador = rowView.findViewById<TextView>(R.id.textViewUtilizador)
        val comentario = rowView.findViewById<TextView>(R.id.textViewComentario)
        val rating = rowView.findViewById<TextView>(R.id.rating)

        val recipe = getItem(position) as Comentarios

        utilizador.text = recipe.utilizador
        comentario.text = recipe.comentario
        rating.text = recipe.rating

        return rowView
    }
}