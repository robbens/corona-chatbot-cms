import SuggestionsDb from '@/firebase/suggestions-db'

export default {
  /**
   * Fetch suggestions of current loggedin user
   */
  getSuggestions: async ({ rootState, commit }) => {
    const suggestionsDb = new SuggestionsDb(rootState.authentication.user.id)

    const suggestions = await suggestionsDb.readAll()
    commit('setSuggestions', suggestions)
  }
}
