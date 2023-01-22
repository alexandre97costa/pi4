package pi4.main.Adapter

import android.content.Context
import android.content.Intent
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.BaseAdapter
import android.widget.LinearLayout
import android.widget.TextView
import pi4.main.Activitys.Historico.ActivityInfoHistoricoEvento
import pi4.main.Classes.Reservas
import pi4.main.R

class SetAdapterCardHistoricoReservas(private val context: Context, private val data:ArrayList<Reservas>): BaseAdapter() {

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

        val recipe = getItem(position) as Reservas

        tituloReserva.text = recipe.getNome()
        dataReserva.text = recipe.getEvento().data
        estadoReserva.text = recipe.getEstado()

        if(recipe.getEstado() === "pendente")
            rowView.setBackgroundResource(R.drawable.shape_yellow)
        if(recipe.getEstado() === "rejeitado")
            rowView.setBackgroundResource(R.drawable.shape_red)
        if(recipe.getEstado() === "valido")
            rowView.setBackgroundResource(R.drawable.shape_green)

        val linerLayout = rowView.findViewById<LinearLayout>(R.id.linearLayoutHistoricoReserva)

        eventListener(linerLayout, recipe.getId(), recipe.getPontoInteresseId())

        return rowView
    }

    fun eventListener(linerLayout: LinearLayout, reservaId:String, pontoInteresseId: String) {
        linerLayout.setOnClickListener{
            context.startActivity(Intent(context, ActivityInfoHistoricoEvento::class.java)
                .putExtra("pontoInteresseId", pontoInteresseId)
                .putExtra("reservaId", reservaId))
        }

    }
}