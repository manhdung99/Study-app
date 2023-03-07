<script setup>
import MainContent from "./MainContent.vue";
import TopContent from "./TopContent.vue";
</script>


<template >
  <div>
    <div>
      <TopContent />
    </div>
    <div>
      <MainContent />
    </div>
  </div>
</template>
<script>
export default {
  components: { TopContent },
  name: "Class",
};
</script>