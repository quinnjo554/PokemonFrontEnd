import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController



@Entity
data class Pokemon(
    var id: int = 0,
    var name: String = "",
    var types: String = "",
    var height: String = "",
    var weight: String = "",
    var
)

@RestController
@RequestMapping("/api/pokemon")
class PokemonController {

    @GetMapping
    fun getAllPokemon(): List<String> {
        // Replace with your logic to fetch and return the list of Pokémon
        return listOf("Bulbasaur", "Charmander", "Squirtle")
    }
}

