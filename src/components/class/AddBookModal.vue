<template>
  <div
    :class="isOpenModal ? 'flex' : 'hidden'"
    class="fixed top-0 bottom-0 left-0 right-0 bg-[#00000021] flex justify-center items-center"
  >
    <div class="w-[800px] h-[700px] bg-white p-4 relative">
      <div
        @click="() => updateModalStatus(false)"
        class="absolute right-4 cursor-pointer"
      >
        <CloseCircleFilled :style="{ fontSize: '24px', color: '#707070' }" />
      </div>
      <div
        class="border-b border-[#C2C2C2] text-xl text-[#00314C] font-bold pb-3"
      >
        Thêm sách
      </div>
      <div class="my-5">
        <input
          class="w-full border border-[#BDBDBD] pl-4 py-2 outline-none focus:border-[#00000091] text-[13px]"
          placeholder="Nhập tên sách..."
        />
      </div>
      <div
        class="flex flex-wrap overflow-y-auto max-h-[480px] gap-x-6 add-book-modal mb-2"
      >
        <fieldset
        v-for="book in books"
          :disabled="booksSelected.includes(book.id)"
          class="mb-8 rounded-[5px] relative border border-transparent"
          v-bind:key="book.id"
          @click="($event) => checkedElement($event,book)"
        >
          <div class="opacity-0 absolute top-0 left-0 w-full h-full"></div>
          <Book
            :title="book.title"
            :currentPrice="book.currentPrice"
            :oldPrice="book.oldPrice"
          />
        </fieldset>
      </div>
      <fieldset
      :disabled="tmpBook.length === 0"
      @click="AddBook()"
        class="bg-[#338131] text-white font-semibold inline-block px-5 py-2 rounded mt-4 ml-[50%] -translate-x-1/2 hover:opacity-80 cursor-pointer"
      >
        Lưu sách
      </fieldset>
    </div>
  </div>
</template>

<script>
import Book from "../book/Book.vue";
import { mapActions, mapGetters } from "vuex";
import { CloseCircleFilled } from "@ant-design/icons-vue";
import { defineComponent } from "vue";

export default defineComponent({
  data(){
    return{
      name: "AddBookModal",
      tmpBook:[],
      booksSelected:[],
    };
  },
  
  computed: {
    ...mapGetters(["isOpenModal"]),
    ...mapGetters(["books"]),
    ...mapGetters(["currentId"]),
    ...mapGetters(["booksCase"]),
  },
  methods: {
    ...mapActions(["updateModalStatus"]),
    ...mapActions(["addBooksToClass"]),

    addBookToTmp(book){
      if(this.tmpBook.findIndex(data => data.id === book.id) >= 0){
        this.tmpBook = this.tmpBook.filter(data => data.id != book.id);
      }else{
        this.tmpBook = [...this.tmpBook,book];
      }
      if(this.tmpBook.length > 0){
        this.isDisable = false;
      }
      
    },

    AddBook(){
     let currentCase = this.booksCase.filter(data => data.id == this.currentId );
     currentCase[0].data = [...currentCase[0].data].concat(this.tmpBook);
     this.updateModalStatus(false);
    },

    checkedElement(element,book) {
      this.addBookToTmp(book);
      element = element.target.parentElement;
      if (element.classList.contains("is-checked")) {
        element.classList.remove("is-checked");
      } else {
        element.classList.add("is-checked");
      }
    
    },
  },
  watch: {
       '$store.state.currentId': function() {
        this.booksSelected = this.currentId ? this.booksCase.find(data => data.id == this.currentId ).data.map((data)=>{return data.id}) : [];
  },
  
 },
  mounted() {
    this.$store.dispatch("getBooks");
  },
  components: {
    Book,
    CloseCircleFilled,
  },
  
});
</script>