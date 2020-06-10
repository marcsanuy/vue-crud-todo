import Vue from 'vue'

export async function fetchTodos ({commit}) {
    try {
        const {data} = await Vue.axios({
            url: '/todos'
        })
        commit('setTodos', data)
    } catch (e) {
        commit('todosError', e.message)
    } finally {
        console.log('La petición para obtener lo todos ha finalizado')
    }
}