<template>
  <div
    :class="isOpenModal ? 'flex' : 'hidden'"
    class="fixed top-0 bottom-0 left-0 right-0 bg-[#00000021] flex justify-center items-center"
  >
    <div  class="w-[800px] h-[700px] bg-white p-4 relative">
      <div @click="()=>updateModalStatus(false)" class="absolute right-4 cursor-pointer">
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
        class="flex flex-wrap overflow-y-auto max-h-[450px] gap-x-6 add-book-modal"
      >
        <Book
          v-for="book in books"
          v-bind:key="book.id"
          :title="book.title"
          :currentPrice="book.currentPrice"
          :oldPrice="book.oldPrice"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Book from "../book/Book.vue";
import { mapActions, mapGetters } from "vuex";
import { CloseCircleFilled } from "@ant-design/icons-vue";
export default {
  name: "AddBookModal",
  // data() {
  //   return {
  //     books: [
  //       {
  //         id: 1,
  //         title: "SGK Địa Lý 12",
  //         currentPrice: "30.000 đ",
  //         oldPrice: "40.000 đ",
  //       },
  //       {
  //         id: 2,
  //         title: "SGK Lịch Sử 12",
  //         currentPrice: "30.000 đ",
  //         oldPrice: "40.000 đ",
  //       },
  //       {
  //         id: 3,
  //         title: "SGK Hoá Học 12",
  //         currentPrice: "30.000 đ",
  //         oldPrice: "40.000 đ",
  //       },
  //       {
  //         id: 4,
  //         title: "SGK Địa Lý 12",
  //         currentPrice: "30.000 đ",
  //         oldPrice: "40.000 đ",
  //       },
  //       {
  //         id: 5,
  //         title: "SGK Lịch Sử 12",
  //         currentPrice: "30.000 đ",
  //         oldPrice: "40.000 đ",
  //       },
  //       {
  //         id: 6,
  //         title: "SGK Hoá Học 12",
  //         currentPrice: "30.000 đ",
  //         oldPrice: "40.000 đ",
  //       },
  //       {
  //         id: 7,
  //         title: "SGK Địa Lý 12",
  //         currentPrice: "30.000 đ",
  //         oldPrice: "40.000 đ",
  //       },
  //       {
  //         id: 8,
  //         title: "SGK Lịch Sử 12",
  //         currentPrice: "30.000 đ",
  //         oldPrice: "40.000 đ",
  //       },
  //       {
  //         id: 9,
  //         title: "SGK Hoá Học 12",
  //         currentPrice: "30.000 đ",
  //         oldPrice: "40.000 đ",
  //       },
  //     ],
  //   };
  // },
  computed:{
    ...mapGetters(['isOpenModal']),
    ...mapGetters(['books'])
  },
  methods:{
    ...mapActions(['updateModalStatus']),
  },
  mounted(){
    this.$store.dispatch('getBooks');
  },
  components: {
    Book,
    CloseCircleFilled,
  },
};
</script>