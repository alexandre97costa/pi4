package pi4.main.Classes

import android.content.Context
import android.widget.Toast
import com.google.android.material.tabs.TabLayout
import pi4.main.R

class CategoriaLista(tabLayout: TabLayout, context: Context) {
    private val tabLayout: TabLayout
    private val context: Context

    private val arrayTexto = arrayListOf<String>("Todos", "Paisagem", "Museu", "Religião", "Bar/Discoteca", "Desporto", "Comércio", "Natureza", "Restauração", "Praia")
    private val arrayIconsNotFill = arrayListOf<Int>(R.drawable.location_notfill)
    private val arrayIconsFill = arrayListOf<Int>(R.drawable.location_fill)

    init {
        this.tabLayout = tabLayout
        this.context = context
        createCategoriasTab()
    }

    //Alterar futuramente arrayIconNotFill[0]
    fun createCategoriasTab() {
        for (i in 0..arrayTexto.count()-1) {
            if (i == 0) //coloca o icon de select no primeiro elemento
                tabLayout.addTab(tabLayout.newTab().setText(arrayTexto[i]).setIcon(arrayIconsFill[0]))
            else //deixa o icon de unselect nos restantes
                tabLayout.addTab(tabLayout.newTab().setText(arrayTexto[i]).setIcon(arrayIconsNotFill[0]))
        }

        createCategoriaListener()
    }

    private fun createCategoriaListener() {
        tabLayout.addOnTabSelectedListener(object : TabLayout.OnTabSelectedListener {

            override fun onTabSelected(tab: TabLayout.Tab) {
                // Handle tab select
                changeIconOnSelected(tab, tab.id)
                Toast.makeText(context, "onTabSelected: ${tab.text}" , Toast.LENGTH_SHORT).show()
            }

            override fun onTabUnselected(tab: TabLayout.Tab) {
                // Handle tab unselect
                changeIconUnSelected(tab, tab.id)
                Toast.makeText(context,"${tab.id}", Toast.LENGTH_SHORT).show()
            }

            override fun onTabReselected(tab: TabLayout.Tab?) {
                // Handle tab reselect
            }
        })
    }

    //Alterar futuramente arrayIconNotFill[0]
    fun changeIconUnSelected(tabLayout: TabLayout.Tab, index: Int) {
        tabLayout.setIcon(arrayIconsNotFill[0])
    }

    //Alterar futuramente arrayIconFill[0]
    fun changeIconOnSelected(tabLayout: TabLayout.Tab, index: Int) {
        tabLayout.setIcon(arrayIconsFill[0])
    }
}