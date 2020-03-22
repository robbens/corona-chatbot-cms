import { find } from 'lodash'

export default {
  /**
   * Get suggestion by id
   */
  getSuggestionById: state => suggestionId =>
    find(state.suggestions, suggestion => suggestion.id === suggestionId)
}
