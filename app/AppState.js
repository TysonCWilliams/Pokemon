import WildPokemon from "./Models/WildPokemon.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  apiWildPokemon = []
  /** @type {WildPokemon} */
  activePokemon = null
  /** @type {WildPokemon[]} */
  wildPokemon = []
  /** @type {WildPokemon[]} */
  myWildPokemon = []



}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
