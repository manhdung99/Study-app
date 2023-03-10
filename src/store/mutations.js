export default  {
    setIsOpenModal(state,payload){
        state.isOpenModal = payload;
    },
    setBooks(state,payload){
        state.books = payload;
    },
    setBooksOfClass(state,payload){
        state.booksOfClass = payload;
    },
    setBooksRecommend(state,payload){
        state.booksRecommend = payload;
    }
}