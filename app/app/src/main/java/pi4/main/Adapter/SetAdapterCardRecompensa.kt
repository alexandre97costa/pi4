package pi4.main.Adapter

import android.content.Context
import android.content.Intent
import android.content.res.ColorStateList
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.BaseAdapter
import android.widget.ImageView
import android.widget.TextView
import android.widget.Toast
import androidx.cardview.widget.CardView
import androidx.constraintlayout.widget.ConstraintLayout
import pi4.main.Activitys.Recompensa.ActivityVoucherInformacoes
import pi4.main.Classes.*
import pi4.main.R

class SetAdapterCardRecompensa(private val context: Context, private val data:ArrayList<Recompensa>, private val jaResgatado: Boolean): BaseAdapter() {
    private val inflater: LayoutInflater = context.getSystemService(Context.LAYOUT_INFLATER_SERVICE) as LayoutInflater

    private val gestor = Gestor()

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
        val rowView = inflater.inflate(R.layout.card_recompensa, parent, false)

        val background = rowView.findViewById<ConstraintLayout>(R.id.colorContraint)
        val pontos = rowView.findViewById<TextView>(R.id.recompensaspontos)
        val recompensa = rowView.findViewById<TextView>(R.id.recompensa)
        val categoria = rowView.findViewById<TextView>(R.id.categoria)

        val recipe = getItem(position) as Recompensa

        Points(recipe.pontos.toInt(), pontos, context).loadPontosPontoInteresseCurto()
        recompensa.text = recipe.nomeRecompesa
        categoria.text = recipe.categoria

        val card = rowView.findViewById<CardView>(R.id.cardViewRecompensa)

        if(jaResgatado == false)
            if(detectPointsUtilizador(rowView, background, recompensa, categoria, recipe.pontos.toInt()))
                eventListener(card, recipe.id)
            else
                pontosInsuficientes(card)

        if(jaResgatado == true)
            eventListener(card, recipe.id)

        return rowView
    }

    fun detectPointsUtilizador(rowView: View, background: ConstraintLayout, recompensa: TextView, categoria: TextView ,pontosRecompensa: Int): Boolean {
        val pontosUtilizador = gestor.utilizador.getPontos().toInt()

        if(pontosRecompensa > pontosUtilizador)
            return setLayoutColors(rowView, background, recompensa, categoria)

        return true
    }

    private fun setLayoutColors(rowView: View, background: ConstraintLayout, recompensa: TextView, categoria: TextView): Boolean {
        val colorGray = R.color.gray.toInt()

        background.setBackgroundColor(colorGray)
        recompensa.setTextColor(colorGray)
        categoria.setTextColor(colorGray)
        rowView.findViewById<ImageView>(R.id.imageViewIconTermos).setImageTintList(ColorStateList.valueOf(colorGray))
        rowView.findViewById<ImageView>(R.id.imageViewSeta).setImageTintList(ColorStateList.valueOf(colorGray))
        rowView.findViewById<TextView>(R.id.textViewTermos).setTextColor(colorGray)

        return false
    }

    private fun pontosInsuficientes(cardView: CardView) {
        cardView.setOnClickListener{
            Toast.makeText(context, "Pontos insuficientes", Toast.LENGTH_SHORT).show()
        }
    }

    fun eventListener(cardView: CardView, recompensaId: String) {
        cardView.setOnClickListener {
            context.startActivity(Intent(context, ActivityVoucherInformacoes::class.java)
                .putExtra("flag", jaResgatado)
                .putExtra("recompensaId", recompensaId))
        }
    }
}