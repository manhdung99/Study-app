import axios from 'axios'

export default {
    updateModalStatus({commit},status){
        commit('setIsOpenModal',status);
    },
    getBooks ({commit}){
        axios.get('https://5e942888c7393c0016de4e98.mockapi.io/books')
        .then(response =>{
            commit('setBooks',response.data);
        } )
    }
}