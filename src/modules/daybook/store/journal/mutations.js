
// export const myAction = ( state ) => {

// }

export const setEntries = ( state, entries ) => {
    state.entries = [ ...state.entries, ...entries ] // agrego los valores anteriores existentes en el state (entries) y ademas agrego los nuevos 
    state.isLoading = false
}

export const updateEntry = ( state, entry  ) => {
    // state.entries => un arreglo...
    // state.entries = ...entry
    const idx = state.entries.map( e => e.id ).indexOf( entry.id )

    // El método map() crea un nuevo array con los resultados de la llamada
    // a la función indicada aplicados a cada uno de sus elementos.

    // var numbers = [1, 5, 10, 15];
    // var doubles = numbers.map(function(x) {
    // return x * 2;
    // });
    // doubles is now [2, 10, 20, 30]
    // numbers is still [1, 5, 10, 15]
    
    state.entries[idx] = entry

    console.log({idx})

}

export const addEntry = ( state, entry ) => {
    state.entries = [ entry, ...state.entries ] // esparcir "...object"
}

export const deleteEntry = ( state, id  ) => {
    // state.entries => un arreglo...
    // state.entries = ...entry
    
    state.entries = state.entries.filter( entry => entry.id != id )

    console.log(id)

}