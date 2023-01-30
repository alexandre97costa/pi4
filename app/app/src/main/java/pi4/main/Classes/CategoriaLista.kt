package pi4.main.Classes

import android.content.Context
import android.widget.Toast
import com.google.android.material.tabs.TabLayout
import pi4.main.Fragments.FragmentPontoInteresse
import pi4.main.R

class CategoriaLista(tabLayout: TabLayout, context: Context) {
    private val tabLayout: TabLayout
    private val context: Context

    private val arrayTexto = arrayListOf<String>("Todos", "Paisagem", "Museu", "Religião", "Bar/Discoteca", "Desporto", "Comércio", "Natureza", "Restauração", "Praia")
    private val arrayIconsNotFill = arrayListOf<Int>(R.drawable.location_notfill, R.drawable.paisagem_notfill, R.drawable.museu_notfill, R.drawable.religiao_notfill, R.drawable.bar_notfill, R.drawable.desporto_notfill, R.drawable.comercio_notfill, R.drawable.natureza_notfill, R.drawable.restauracao_notfill,R.drawable.praia_notfill)
    private val arrayIconsFill = arrayListOf<Int>(R.drawable.location_fill, R.drawable.paisagem_fill, R.drawable.museu_fill, R.drawable.religiao_fill, R.drawable.bar_fill, R.drawable.desporto_fill, R.drawable.comercio_fill, R.drawable.natureza_fill, R.drawable.restauracao_fill,R.drawable.praia_fill)

    init {
        this.tabLayout = tabLayout
        this.context = context
        createCategoriasTab()
    }

    //Alterar futuramente arrayIconNotFill[0]
    fun createCategoriasTab() {
        for (i in 0..arrayTexto.count()-1) {
            if (i == 0) //coloca o icon de select no primeiro elemento
                tabLayout.addTab(tabLayout.newTab().setText(arrayTexto[i]).setIcon(arrayIconsFill[i]))
            else //deixa o icon de unselect nos restantes
                tabLayout.addTab(tabLayout.newTab().setText(arrayTexto[i]).setIcon(arrayIconsNotFill[i]))
        }
    }

    fun createCategoriaListener(funcao: (Int) -> Unit) {
        tabLayout.addOnTabSelectedListener(object : TabLayout.OnTabSelectedListener {

            override fun onTabSelected(tab: TabLayout.Tab) {
                // Handle tab select
                changeIconOnSelected(tab, tab.position)
                funcao(tab.position)
            }

            override fun onTabUnselected(tab: TabLayout.Tab) {
                // Handle tab unselect
                changeIconUnSelected(tab, tab.position)
            }

            override fun onTabReselected(tab: TabLayout.Tab?) {
                // Handle tab reselect
            }
        })
    }

    //Alterar futuramente arrayIconNotFill[0]
    private fun changeIconUnSelected(tabLayout: TabLayout.Tab, index: Int) {
        tabLayout.setIcon(arrayIconsNotFill[index])
    }

    //Alterar futuramente arrayIconFill[0]
    private fun changeIconOnSelected(tabLayout: TabLayout.Tab, index: Int) {
        tabLayout.setIcon(arrayIconsFill[index])
    }
}