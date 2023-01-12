package pi4.main.Classes

import com.google.android.material.tabs.TabLayout
import pi4.main.R

class CategoriaLista(arrayIconNotFill: ArrayList<Int>, arrayIconFill: ArrayList<Int>, arrayTexto: ArrayList<String>) {
    private val arrayIconNotFill: ArrayList<Int>
    private val arrayIconFill: ArrayList<Int>
    private val arrayTexto: ArrayList<String>

    init {
        this.arrayIconNotFill = arrayIconNotFill
        this.arrayIconFill = arrayIconFill
        this.arrayTexto = arrayTexto
    }

    //Alterar futuramente arrayIconNotFill[0]
    fun insertCategorias(tabLayout: TabLayout) {
        for (i in 0..arrayTexto.count()-1) {
            if (i == 0) //coloca o icon de select no primeiro elemento
                tabLayout.addTab(tabLayout.newTab().setText(arrayTexto[i]).setIcon(arrayIconFill[0]))
            else //deixa o icon de unselect nos restantes
                tabLayout.addTab(tabLayout.newTab().setText(arrayTexto[i]).setIcon(arrayIconNotFill[0]))
        }
    }

    //Alterar futuramente arrayIconNotFill[0]
    fun changeIconUnSelected(tabLayout: TabLayout.Tab, index: Int) {
        tabLayout.setIcon(arrayIconNotFill[0])
    }

    //Alterar futuramente arrayIconFill[0]
    fun changeIconOnSelected(tabLayout: TabLayout.Tab, index: Int) {
        tabLayout.setIcon(arrayIconFill[0])
    }
}