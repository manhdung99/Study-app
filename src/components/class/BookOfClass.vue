<template >
  <div>
    <p class="text-[#00314C] uppercase text-base font-bold mb-7">
      >> bộ sách ôn luyện cơ bản
    </p>
    <span class="text-[#7C7C7C] text-base italic mb-7 block"
      >Những quyển sách này giúp các em xây dựng nền tảng vững chắc</span
    >
  </div>
  <div class="flex space-x-8 max-w-5xl overflow-y-auto list-book pb-6 mb-6">
    <Book
      v-for="book in booksOfClass"
      v-bind:key="book.id"
      :title="book.title"
      :currentPrice="book.currentPrice"
      :oldPrice="book.oldPrice"
    />
    <div
      @click="() => updateModalStatus(true)"
      class="bg-[#00000021] min-w-[168px] h-[258px] flex flex-col items-center justify-center rounded-[5px] cursor-pointer"
    >
      <span>
        <PlusOutlined :style="{ fontSize: '40px', color: '#707070' }"
      /></span>
      <span class="italic text-[#979797]">Thêm sách</span>
    </div>
  </div>
</template>

<script>
import Book from "../book/Book.vue";
import { PlusOutlined } from "@ant-design/icons-vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "BookOfClass",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getBooksOfClass");
  },
  components: {
    Book,
    PlusOutlined,
  },
  computed: {
    ...mapGetters(["booksOfClass"]),
  },
  methods: {
    ...mapActions(["updateModalStatus"]),
  },
};
</script>