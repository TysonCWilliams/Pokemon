import { ProxyState } from "../AppState.js";
import WildPokemon from "../Models/WildPokemon.js";
import { pokeApi } from "./AxiosService.js";

class WildPokemonService {
  constructor() {
    console.log("api service");
    // this.getAll()
  }
  async getActivePokemon(index) {
    let res = await pokeApi.get(index)
    console.log(res)
    ProxyState.activePokemon = new WildPokemon(res.data)
  }
  async getAll() {
    //then catch way
    // pokeApi.get("").then(res => {
    //   console.log(res)
    // }).catch(err => console.error(err))

    //async await but needs try catch in controller
    let res = await pokeApi.get("pokemon")
    // debugger
    console.log(res.data.results)
    ProxyState.apiWildPokemon = res.data.results
  }

  async getPokemonByURL(url) {
    // @ts-ignore
    let res = await axios.get(url)
    console.log(res.data)
    ProxyState.activePokemon = new WildPokemon(res.data)
  }

  async getPokemonById(id) {
    let route = "pokemon/" + id
    let res = await pokeApi.get(route)
    console.log(res.data)
  }
}

export const wildPokemonService = new WildPokemonService();