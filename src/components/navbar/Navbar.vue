<template>
  <div>
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      style="width: 256px"
      mode="inline"
    >
      <router-link to="/home">
        <a-menu-item key="home">
          <template #icon>
            <HomeOutlined />
          </template>
          Trang Chủ
        </a-menu-item>
      </router-link>
      <router-link to="/class">
        <a-menu-item key="class">
          <template #icon>
            <CalendarOutlined />
          </template>
          Lớp của tôi
        </a-menu-item>
      </router-link>
      <router-link to="/management">
        <a-menu-item key="management">
          <template #icon>
            <OrderedListOutlined />
          </template>
          Quản lý
        </a-menu-item>
      </router-link>
      <router-link to="/schedule">
        <a-menu-item key="schedule">
          <template #icon>
            <CarryOutOutlined />
          </template>
          Lịch dạy
        </a-menu-item>
      </router-link>
      <router-link to="/exam">
        <a-menu-item key="exam">
          <template #icon>
            <BarChartOutlined />
          </template>
          Khảo thí
        </a-menu-item>
      </router-link>
      <router-link to="/information">
        <a-menu-item key="information">
          <template #icon>
            <MessageOutlined />
          </template>
          Tin tức
        </a-menu-item>
      </router-link>
      <router-link to="/support">
        <a-menu-item key="support">
          <template #icon>
            <QuestionCircleFilled />
          </template>
          Hỗ trợ
        </a-menu-item>
      </router-link>
    </a-menu>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import {
  CalendarOutlined,
  HomeOutlined,
  OrderedListOutlined,
  CarryOutOutlined,
  BarChartOutlined,
  MessageOutlined,
  QuestionCircleFilled,
} from "@ant-design/icons-vue";
import type { MenuTheme } from "ant-design-vue";
export default defineComponent({
  components: {
    CalendarOutlined,
    HomeOutlined,
    OrderedListOutlined,
    CarryOutOutlined,
    BarChartOutlined,
    MessageOutlined,
    QuestionCircleFilled,
  },
  setup() {
    const state = reactive({
      theme: "light" as MenuTheme,
      selectedKeys: ["home"],
      openKeys: [""],
    });

    return {
      ...toRefs(state),
    };
  },
});
</script>

