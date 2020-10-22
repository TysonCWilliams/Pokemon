import { ProxyState } from "../AppState.js";
import { myWildPokemonService } from "../Services/MyWildPokemonService.js"

function _drawMyWildPokemon(){
  let wildPokemon = ProxyState.myWildPokemon
  let template = ""
  wildPokemon.forEach(w => template += `<li onclick="app.myWildPokemonController.getActivePokemon('${w.id}')" class="pointer">${w.name}</li>`)
  document.getElementById("my-wild-pokemon").innerHTML = template

}
export default class MyWildPokemonController{
  constructor(){
    console.log("mywildpokemoncontroller");
    ProxyState.on("myWildPokemon", _drawMyWildPokemon)
    this.getMyWildPokemon()
  }

    getMyWildPokemon(){
      try {
        myWildPokemonService.getMyWildPokemon()
      } catch (error) {
        console.error(error)
      }
    }

    learnPokemon(){
      try {
        console.log("test")
        myWildPokemonService.addWildPokemon()
      } catch (error) {
        console.error(error)
      }
    }

    getActivePokemon(id){
      try {
        myWildPokemonService.getActivePokemon(id)
      } catch (error) {
        console.error(error)
      }
    }
    removePokemon(){
      try {
        myWildPokemonService.removePokemon()
      } catch (error) {
        console.error(error)
      }
    }
}