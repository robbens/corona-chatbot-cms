import GenericDB from './generic-db'

export default class SuggestionsDb extends GenericDB {
  constructor() {
    super(`suggestions`)
  }

  // Here you can extend UserProductsDB with custom methods
}
