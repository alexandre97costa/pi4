package pi4.main.Adapter

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.BaseAdapter
import android.widget.LinearLayout
import android.widget.TextView
import pi4.main.Activitys.Historico.ActivityInfoHistoricoEvento
import pi4.main.Classes.HistoricoReservas
import pi4.main.Classes.StartActivitys
import pi4.main.R

class SetAdapterCardHistoricoReservas(private val context: Context, private val data:ArrayList<HistoricoReservas>): BaseAdapter() {

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
        val rowView = inflater.inflate(R.layout.card_historico_reserva, parent, false)

        val tituloReserva = rowView.findViewById<TextView>(R.id.textViewTituloReserva)
        val dataReserva = rowView.findViewById<TextView>(R.id.textViewDataReserva)
        val estadoReserva = rowView.findViewById<TextView>(R.id.textViewEstadoReserva)

        val recipe = getItem(position) as HistoricoReservas

        tituloReserva.text = recipe.nome
        dataReserva.text = recipe.data
        estadoReserva.text = recipe.estado

        if(recipe.estado === "pendente")
            rowView.setBackgroundResource(R.drawable.shape_yellow)
        if(recipe.estado === "rejeitado")
            rowView.setBackgroundResource(R.drawable.shape_red)
        if(recipe.estado === "valido")
            rowView.setBackgroundResource(R.drawable.shape_green)

        val linerLayout = rowView.findViewById<LinearLayout>(R.id.linearLayoutHistoricoReserva)

        eventListener(linerLayout, recipe.nome)

        return rowView
    }

    fun eventListener(linerLayout: LinearLayout, mensagem:String) {
        val startActivity = StartActivitys(context)

        startActivity.LinearLayoutGoTo(linerLayout, ActivityInfoHistoricoEvento())
    }
}