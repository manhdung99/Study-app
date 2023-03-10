export default  {
    setIsOpenModal(state,payload){
        state.isOpenModal = payload;
    },
    setBooks(state,payload){
        state.books = payload;
    },
    setBooksCase(state,payload){
        state.booksCase = payload;
    },
    setCurrentId(state,payload){
        state.currentId = payload;
    },
    setIsDisplaySuccessMessage(state,payload){
        state.isDisplaySuccessMessage = payload;
    },
}