<script setup>
import AddBookModalVue from "./AddBookModal.vue";
import MainContent from "./MainContent.vue";
import TopContent from "./TopContent.vue";
import AddBookModal from "./AddBookModal.vue";
</script>


<template >
  <div>
    <p>{{ $store.state.test }}</p>
    <div>
      <TopContent />
    </div>
    <div>
      <MainContent />
    </div>
  </div>
  <AddBookModal />
</template>
<script>
export default {
  components: { TopContent, MainContent, AddBookModal },
  name: "Class",
};
</script>