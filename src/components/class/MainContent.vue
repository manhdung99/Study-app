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
  <div class="px-4">
    <BookOfClass />
  </div>
  <div class="px-4">
    <RecommendedBook />
  </div>
</template>

<script lang="ts">
import { ReadOutlined, BarChartOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
import BookOfClass from "./BookOfClass.vue";
import RecommendedBook from "./RecommendedBook.vue";
export default defineComponent({
  setup() {
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
    BookOfClass,
    RecommendedBook,
  },
});
</script>
