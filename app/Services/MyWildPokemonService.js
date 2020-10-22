import { ProxyState } from "../AppState.js";
import WildPokemon from "../Models/WildPokemon.js";
import { sandboxApi } from "./AxiosService.js";

class MyWildPokemonService {
  constructor() {
    console.log("mywildpokemonserv");
  }
  async getMyWildPokemon() {
    let res = await sandboxApi.get("")
    console.log(res)
    ProxyState.myWildPokemon = res.data.data.map(w => new WildPokemon(w))
  }
  async addWildPokemon() {  
    let res = await sandboxApi.post("", ProxyState.activePokemon)
    console.log(res)
    // this.getMyWildPokemon()
    ProxyState.myWildPokemon = [...ProxyState.myWildPokemon, new WildPokemon(res.data.data) ]
  }
  getActivePokemon(id) {
    ProxyState.activePokemon = ProxyState.myWildPokemon.find(w => w.id == id)
  }

  //api/class/wildPokemon/89yt345hto4ibnour
  async removePokemon() {
    await sandboxApi.delete(ProxyState.activePokemon.id)
    this.getMyWildPokemon()
    ProxyState.activePokemon = null
  }
}
export const myWildPokemonService = new MyWildPokemonService()