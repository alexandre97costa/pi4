package pi4.main.Adapter

import android.content.ContentQueryMap
import android.content.Context
import android.content.res.ColorStateList
import android.graphics.Color
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.BaseAdapter
import android.widget.TextView
import androidx.appcompat.content.res.AppCompatResources
import androidx.core.content.ContentProviderCompat
import androidx.core.content.res.ResourcesCompat
import pi4.main.Classes.Historico
import pi4.main.R

class SetAdapterCardHistorico(private val context: Context, private val data:ArrayList<Historico>): BaseAdapter() {

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
        val rowView = inflater.inflate(R.layout.card_historico, parent, false)

        val tituloReserva = rowView.findViewById<TextView>(R.id.textViewTituloReserva)
        val dataReserva = rowView.findViewById<TextView>(R.id.textViewDataReserva)
        val estadoReserva = rowView.findViewById<TextView>(R.id.textViewEstadoReserva)

        val recipe = getItem(position) as Historico

        tituloReserva.text = recipe.titulo
        dataReserva.text = recipe.data

        if(recipe.estado === "pendente")
            estadoReserva.setTextColor(Color.parseColor("#f2f2f2"))
        if(recipe.estado === "rejeitado")
            estadoReserva.setTextColor(Color.parseColor("#f2f2f2"))
        if(recipe.estado === "valido")
            estadoReserva.setTextColor(Color.parseColor("#f2f2f2"))

        estadoReserva.text = recipe.estado

        return rowView
    }
}