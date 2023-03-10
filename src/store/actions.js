import axios from 'axios'

export default {
    updateModalStatus({commit},{status,id}){
        commit('setCurrentId',id)
        commit('setIsOpenModal',status);
    },
    getBooks ({commit}){
        axios.get('https://5e942888c7393c0016de4e98.mockapi.io/books')
        .then(response =>{
            commit('setBooks',response.data);
        } )
    },
    getBooksCase ({commit}){
        const books =[
          {
          "id":1,
          "title":">> bộ sách ôn luyện cơ bản",
          "description":"Những quyển sách này giúp các em xây dựng nền tảng vững chắc",
          "data":[
           {
            "title": "SGK Địa Lý 12",
            "image": "image 1",
            "currentPrice": "30.000 đ",
            "oldPrice": "40.000 đ",
            "id": "1"
           },
           {
            "title": "SGK Địa Lý 12",
            "image": "image 2",
            "currentPrice": "30.000 đ",
            "oldPrice": "40.000 đ",
            "id": "2"
           },
           {
            "title": "SGK Địa Lý 12",
            "image": "image 3",
            "currentPrice": "30.000 đ",
            "oldPrice": "40.000 đ",
            "id": "3"
           }
          ]
          },
          {
          "id":2,
          "title":">> bộ sách ôn luyện nâng cao",
          "description":"Những quyển sách này giúp các em xây dựng nền tảng vững chắc",
          "data":[
           {
            "title": "SGK Địa Lý 12",
            "image": "image 1",
            "currentPrice": "30.000 đ",
            "oldPrice": "40.000 đ",
            "id": "1"
           },
           {
            "title": "SGK Địa Lý 12",
            "image": "image 2",
            "currentPrice": "30.000 đ",
            "oldPrice": "40.000 đ",
            "id": "2"
           },
           {
            "title": "SGK Địa Lý 12",
            "image": "image 3",
            "currentPrice": "30.000 đ",
            "oldPrice": "40.000 đ",
            "id": "3"
           },
           {
            "title": "SGK Địa Lý 12",
            "image": "image 4",
            "currentPrice": "30.000 đ",
            "oldPrice": "40.000 đ",
            "id": "4"
           }
          ]
          }
          ]
        commit('setBooksCase',books);
    },
    addBooksToClass({commit},books){
        commit('setBooks',books);
    }

}