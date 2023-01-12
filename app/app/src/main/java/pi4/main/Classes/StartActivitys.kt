package pi4.main.Classes

import android.app.Activity
import android.content.Context
import android.content.Intent
import android.widget.Button
import android.widget.TextView
import androidx.cardview.widget.CardView

class StartActivitys(context: Context) {
    private val context: Context

    init {
        this.context = context
    }

    fun buttonGoTo(button: Button, activity: Activity) {
        button.setOnClickListener {
            context.startActivity(Intent(context, activity::class.java))
        }
    }

    fun textViewGoTo(textView: TextView, activity: Activity) {
        textView.setOnClickListener {
            context.startActivity(Intent(context, activity::class.java))
        }
    }

    fun cardGoTo(cardView: CardView, activity: Activity) {
        cardView.setOnClickListener {
            context.startActivity(Intent(context, activity::class.java))
        }
    }
}