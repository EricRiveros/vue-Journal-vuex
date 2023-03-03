import journalApi from '@/api/journalApi';
// export const myAction = async ({ commit }) => {

// }

export const loadEntries = async ({commit}) => {
    // it's a promise so w use "await" & desestructure the response
    const { data } = await journalApi.get('/entries.json') 

    if ( !data ){
        commit('setEntries', [])
        return
    }

    const entries = []
    for( let id of Object.keys( data ) ) {
        entries.push({
            id,
            ...data[id]
        })
    }
    console.log(entries)
    commit('setEntries', entries)
}

export const updateEntry = async ({ commit }, entry) => { // entry debe ser un parametro
    // TODO: TAREA:
    // Extraer solo lo que necesitan // -id
    // await jpurnal.put( PATH .json, dataToSave )
    // Commit de una mutation -> updateEntry

    const { date, picture, text } = entry
    // const { id, ...rest } = entry // esta seria otra forma de separar el id del objeto entry, para despues trabajar con lo que tiene "rest"

    const dataToSave = { date, picture, text }
    await journalApi.put( `/entries/${ entry.id }.json`, dataToSave )
    //console.log(resp)

    commit('updateEntry', { ...entry } )
}

export const createEntry = async ({ commit }, entry) => {
    const { date, picture, text } = entry
    const dataToSave = { date, picture, text }

    const { data } = await journalApi.post( '/entries.json', dataToSave )
    
    dataToSave.id = data.name

    commit('addEntry', dataToSave )

    return data.name
}

export const deleteEntry = async ({ commit }, id) => {
    await journalApi.delete( `/entries/${ id }.json` )
    //console.log(resp)

    commit('deleteEntry', id)
}

