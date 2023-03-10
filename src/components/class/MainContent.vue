<template class="sub-tab">
  <div>
    <a-tabs v-model:activeKey="activeKey" type="card">
      <a-tab-pane
        v-for="data in menu"
        :key="data.id"
        :tab="`${data.name}`"
      ></a-tab-pane>
      <a-tab-pane key="9">
        <template #tab>
          <span class="flex items-center">
            <BarChartOutlined />
            Kết quả học tập
          </span>
        </template>
      </a-tab-pane>
      <a-tab-pane key="10">
        <template #tab>
          <span class="flex items-center">
            <ReadOutlined />
            Tủ sách kiến nghị
          </span>
        </template>
      </a-tab-pane>
    </a-tabs>
  </div>
  <div v-for="bookCase in booksCase" key="bookCase.id" class="px-4">
    <div>
      <p class="text-[#00314C] uppercase text-base font-bold mb-7">
        {{ bookCase.title }}
      </p>
      <span class="text-[#7C7C7C] text-base italic mb-7 block">{{
        bookCase.description
      }}</span>
    </div>
    <div class="flex space-x-8 max-w-5xl overflow-y-auto list-book pb-6 mb-6">
      <Book
        v-for="book in bookCase.data"
        v-bind:key="book.id"
        :title="book.title"
        :currentPrice="book.currentPrice"
        :oldPrice="book.oldPrice"
      />
      <div
        @click="() => updateModalStatus({ status: true, id: bookCase.id })"
        class="bg-[#00000021] min-w-[168px] h-[258px] flex flex-col items-center justify-center rounded-[5px] cursor-pointer"
      >
        <span>
          <PlusOutlined :style="{ fontSize: '40px', color: '#707070' }"
        /></span>
        <span class="italic text-[#979797]">Thêm sách</span>
      </div>
    </div>
  </div>
  <div
    :class="isDisplaySuccessMessage ? 'flex' : 'hidden'"
    class="fixed top-0 bottom-0 left-0 right-0 bg-[#00000021] flex justify-center items-center"
  >
    <div
      @click="() => updateSuccessMessStatus({ status: false })"
      class="w-[364px] h-[288px] bg-white p-4 relative flex justify-center flex-col items-center rounded-[10px]"
    >
      <span
        ><CheckCircleFilled :style="{ fontSize: '60px', color: '#338131' }" />
      </span>
      <span class="text-[#00314C] text-lg font-bold block mt-3"
        >Lưu sách thành công</span
      >
      <div
        class="text-sm text-white font-semibold bg-[#355D73] px-8 py-2 rounded-[5px] mt-8 cursor-pointer hover:opacity-80"
      >
        Trở về
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Book from "../book/Book.vue";
import { mapGetters, mapActions } from "vuex";
import { PlusOutlined, CheckCircleFilled } from "@ant-design/icons-vue";
import { ReadOutlined, BarChartOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  data() {
    const menu = [
      { id: 1, name: "HD sử dụng" },
      { id: 2, name: "Unit 6" },
      { id: 3, name: "Unit 7" },
      { id: 4, name: "Unit 8" },
      { id: 5, name: "Unit 9" },
      { id: 6, name: "Luyện từ vựng" },
      { id: 7, name: "Luyện nghe" },
      { id: 8, name: "Luyện ngữ pháp" },
    ];
    return {
      menu,
      activeKey: ref(1),
    };
  },
  components: {
    ReadOutlined,
    BarChartOutlined,
    Book,
    PlusOutlined,
    CheckCircleFilled,
  },
  mounted() {
    this.$store.dispatch("getBooksCase");
  },
  computed: {
    ...mapGetters(["booksCase"]),
    ...mapGetters(["currentId"]),
    ...mapGetters(["isOpenModal"]),
    ...mapGetters(["isDisplaySuccessMessage"]),
  },
  methods: {
    ...mapActions(["updateModalStatus"]),
    ...mapActions(["updateSuccessMessStatus"]),
  },
});
</script>
