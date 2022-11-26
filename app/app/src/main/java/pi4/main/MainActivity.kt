package pi4.main

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Toast
import androidx.fragment.app.Fragment
import androidx.fragment.app.FragmentManager
import com.google.android.material.navigation.NavigationBarView
import pi4.main.Fragments.FragmentPontoInteresse
import pi4.main.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {

    lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        replaceFragment(FragmentPontoInteresse())

        detectMenu()
    }

    fun detectMenu() {
        binding.includeMenu.bottomNavigation.setOnItemSelectedListener(
            NavigationBarView.OnItemSelectedListener { item ->
                when(item.itemId) {
                    R.id.pontoInteresseMenu -> {
                        replaceFragment(FragmentPontoInteresse())
                        true
                    }
                    R.id.recompensaMenu -> {
                        replaceFragment(FragmentPontoInteresse())
                        Toast.makeText(this, "recompensaMenu", Toast.LENGTH_SHORT).show()
                        true
                    }
                    R.id.qrCodeMenu -> {
                        replaceFragment(FragmentPontoInteresse())
                        Toast.makeText(this, "qrCodeMenu", Toast.LENGTH_SHORT).show()
                        true
                    }
                    R.id.contaMenu -> {
                        replaceFragment(FragmentPontoInteresse())
                        Toast.makeText(this, "contaMenu", Toast.LENGTH_SHORT).show()
                        true
                    }
                    else -> false
                }
            }
        )
    }

    fun replaceFragment(fragment: Fragment) {
        val fragmentManager:FragmentManager = supportFragmentManager
        val fragmentTransaction = fragmentManager.beginTransaction()
        fragmentTransaction.replace(R.id.fragmentContainer, fragment)
        fragmentTransaction.commit()
    }
}