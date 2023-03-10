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
    },
    getBooksOfClass ({commit}){
        const books =[
            {
                id: 1,
                title: "SGK Địa Lý 12",
                currentPrice: "30.000 đ",
                oldPrice: "40.000 đ",
              },
              {
                id: 2,
                title: "SGK Lịch Sử 12",
                currentPrice: "30.000 đ",
                oldPrice: "40.000 đ",
              },
              {
                id: 3,
                title: "SGK Hoá Học 12",
                currentPrice: "30.000 đ",
                oldPrice: "40.000 đ",
              },
        ]
        commit('setBooksOfClass',books);
    },
    getBooksOfRecommend ({commit}){
        const books =[
            {
                id: 1,
                title: "SGK Địa Lý 12",
                currentPrice: "30.000 đ",
                oldPrice: "40.000 đ",
              },
              {
                id: 2,
                title: "SGK Lịch Sử 12",
                currentPrice: "30.000 đ",
                oldPrice: "40.000 đ",
              },
              {
                id: 3,
                title: "SGK Hoá Học 12",
                currentPrice: "30.000 đ",
                oldPrice: "40.000 đ",
              },
        ]
        commit('setBooksRecommend',books);
    }
}