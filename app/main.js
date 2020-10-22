import WildPokemonController from "./Controllers/WildPokemonController.js";
import MyWildPokemonController from "./Controllers/MyWildPokemonController.js";

class App {
  wildPokemonController = new WildPokemonController();
  myWildPokemonController = new MyWildPokemonController();
}

window["app"] = new App();
