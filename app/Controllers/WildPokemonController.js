import { ProxyState } from "../AppState.js";
import { wildPokemonService } from "../Services/WildPokemonService.js"

function _drawWildPokemon() {
  // console.log(ProxyState.apiWildPokemon);
  console.log('Running')
  let wildPokemon = ProxyState.apiWildPokemon
  let template = ""
  wildPokemon.forEach(w => template += `<li onclick="app.wildPokemonController.getPokemonByURL('${w.url}')" class="pointer">${w.name}</li>`)
  document.getElementById("api-wild-pokemon").innerHTML = template
}

function _drawActivePokemon() {
  if(ProxyState.activePokemon){
    console.log(ProxyState.activePokemon)
    document.getElementById("current-active-pokemon").innerHTML = ProxyState.activePokemon.Template;
  }else {
    document.getElementById("current-active-pokemon").innerHTML = "";
  }
}

export default class WildPokemonController {
  constructor() {
    console.log("wild pokemon controller");
    this.getAllWildPokemon()
    ProxyState.on("apiWildPokemon", _drawWildPokemon)
    ProxyState.on("activePokemon", _drawActivePokemon)
    // ProxyState.on("activeSpell", _drawActiveSpell)
  }

  getAllWildPokemon() {
    try {
      wildPokemonService.getAll()
    } catch (error) {
      console.error(error)
    }
  }

  getPokemonById(url) {
    console.log(url)
    wildPokemonService.getPokemonById(url)
  }

  getPokemonByURL(url) {
    wildPokemonService.getPokemonByURL(url)
  }
  getActivePokemon(index) {
    try {
      wildPokemonService.getActivePokemon(index)
    } catch (error) {
      console.error(error)
    }
  }
}