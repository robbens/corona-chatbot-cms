export default {
  /* Suggestions */
  setSuggestions: (state, suggestions) => (state.suggestions = suggestions),
  addSuggestion: (state, suggestions) => state.suggestions.push(suggestions),
}
