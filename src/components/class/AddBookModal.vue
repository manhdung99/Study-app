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
        <div
          class="mb-8 rounded-[5px] relative border border-transparent"
          v-for="book in books"
          v-bind:key="book.id"
          @click="($event) => checkedElement($event)"
        >
          <div class="opacity-0 absolute top-0 left-0 w-full h-full"></div>
          <Book
            :title="book.title"
            :currentPrice="book.currentPrice"
            :oldPrice="book.oldPrice"
          />
        </div>
      </div>
      <div
        class="bg-[#338131] text-white font-semibold inline-block px-5 py-2 rounded mt-4 ml-[50%] -translate-x-1/2 hover:opacity-80 cursor-pointer"
      >
        Lưu sách
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
  computed: {
    ...mapGetters(["isOpenModal"]),
    ...mapGetters(["books"]),
  },
  methods: {
    ...mapActions(["updateModalStatus"]),
    checkedElement(element) {
      element = element.target.parentElement;
      if (element.classList.contains("is-checked")) {
        element.classList.remove("is-checked");
      } else {
        element.classList.add("is-checked");
      }
    },
  },
  mounted() {
    this.$store.dispatch("getBooks");
  },
  components: {
    Book,
    CloseCircleFilled,
  },
};
</script>