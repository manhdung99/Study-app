<template >
  <div>
    <p class="text-[#00314C] uppercase text-base font-bold mb-7">
      >> bộ sách nâng cao
    </p>
    <span class="text-[#7C7C7C] text-base italic mb-7 block"
      >Đây là những sách giúp học sinh học hỏi & trau dồi kỹ năng ở các trình độ
      cao hơn.</span
    >
  </div>
  <div class="flex space-x-8 max-w-5xl overflow-y-auto list-book pb-6 mb-6">
    <Book
      v-for="book in booksRecommend"
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
import { mapActions, mapGetters } from "vuex";
import { PlusOutlined } from "@ant-design/icons-vue";
export default {
  name: "RecommendedBook",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getBooksOfRecommend");
  },
  components: {
    Book,
    PlusOutlined,
  },
  computed: {
    ...mapGetters(["booksRecommend"]),
  },
  methods: {
    ...mapActions(["updateModalStatus"]),
  },
};
</script>