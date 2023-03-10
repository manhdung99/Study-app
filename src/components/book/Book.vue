<template >
  <div class="rounded-[5px] shadow min-w-[168px]">
    <div>
      <img src="../../assets/image/Thumbnail.png" alt="book image" />
    </div>
    <div class="bg-[#F8F9FA] px-[14px] rounded-[5px]">
      <span class="font-semibold text-[#00314C] text-base pt-2 block">
        {{ title }}
      </span>
      <div class="flex space-x-2 pb-3 items-center">
        <span class="font-bold text-[#D03239] text-sm">
          {{ currentPrice }}
        </span>
        <span class="text-xs line-through text-[#68818F]">{{ oldPrice }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Book",
  data() {
    return {};
  },
  props: {
    title: String,
    currentPrice: String,
    oldPrice: String,
  },
};
</script>