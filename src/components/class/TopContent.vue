<template>

<div class="flex justify-between">
    <div>Lớp 11A8</div>
    <a-tabs
      v-model:activeKey="activeKey"
      :tab-position="mode"
    >
      <a-tab-pane v-for=" data in listClass" :key="data.id" :tab="`${data.name}`">
    </a-tab-pane>
    </a-tabs>
</div>

</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
    components: {  },
  setup() {
    const mode = ref('top');
    const activeKey = ref(1);
    const listClass = [
        {id:1,name:'Lớp 10 - Kỳ 1'},
        {id:2,name:'Lớp 10 - Kỳ 2'},
        {id:3,name:'Lớp 11 - Kỳ 1'},
        {id:4,name:'Lớp 11 - Kỳ 2'},
        {id:5,name:'Lớp 12 - Kỳ 1'},
        {id:6,name:'Lớp 12 - Kỳ 2'}

    ];
    return {
      mode,
      activeKey,
      listClass,
    };
  },
});
</script>