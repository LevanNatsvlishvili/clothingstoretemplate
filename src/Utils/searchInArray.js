const Search = (array, value) => {
  return array.find(({ id }) => id === value)
}

export default Search