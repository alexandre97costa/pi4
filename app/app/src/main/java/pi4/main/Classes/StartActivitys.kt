package pi4.main.Classes

import android.app.Activity
import android.content.Context
import android.content.Intent
import android.widget.Button
import android.widget.LinearLayout
import android.widget.TextView
import androidx.cardview.widget.CardView
import com.google.android.material.circularreveal.CircularRevealLinearLayout
import com.google.android.material.floatingactionbutton.FloatingActionButton

class StartActivitys(context: Context) {
    private val context: Context

    init {
        this.context = context
    }

    fun floatingPreviousActivity(floatingActionButton: FloatingActionButton, activity: Activity) {
        floatingActionButton.setOnClickListener{
            activity.finish()
        }
    }

    fun buttonGoToSemListener(activity: Activity) {
        context.startActivity(Intent(context, activity::class.java))
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

    fun textViewComentariosGoTo(textView: TextView, activity: Activity, pontoInteresseId: String) {
        textView.setOnClickListener {
            context.startActivity(Intent(context, activity::class.java)
                .putExtra("pontoInteresseId", pontoInteresseId))
        }
    }

    fun cardGoTo(cardView: CardView, activity: Activity) {
        cardView.setOnClickListener {
            context.startActivity(Intent(context, activity::class.java))
        }
    }

    fun cardRecompensaGoTo(cardView: CardView, flag: Boolean ,activity: Activity) {
        cardView.setOnClickListener {
            context.startActivity(Intent(context, activity::class.java)
                .putExtra("flag", flag))
        }
    }

    fun LinearLayoutGoTo(linearLayout: LinearLayout, activity: Activity) {
        linearLayout.setOnClickListener {
            context.startActivity(Intent(context, activity::class.java))
        }
    }
}