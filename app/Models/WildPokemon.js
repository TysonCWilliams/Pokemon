export default class WildPokemon {
  constructor(data) {
    this.id = data._id
    this.name = data.name
    this.ability = data.ability
    this.url = data.url
    this.sprites = data.sprites

    // if(Array.isArray(this.description)){
    //   this.description = this.description.join('\n')
    // }
  }

  get Template() {
    console.log('Template is being invoked')
    return /*html*/`
    <div class="card">
                     <img style="width: 100px;" src="${this.sprites.front_default}" alt=""/>
                    </div>`
  }

  get Button() {
    if (this.id) {
      return `<button class="btn btn-danger" onclick="app.myWildPokemonController.removePokemon()">Unlearn Spell</button>`
    }
    return `<button class="btn btn-primary" onclick="app.myWildPokemonController.learnPokemon()">Learn Spell</button>`
  }
}