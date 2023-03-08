<template>

<div>
    <p>bộ sách ôn luyện cơ bản</p>
    <span>Những quyển sách này giúp các em xâ dựng nền tảng vững chắc</span>
</div>
<div>
    <Book />
</div>
</template>

<script>

import Book from '../book/Book.vue';

export default {
    name: 'BookOfClass',
    data(){
        return{

        }
    },
    components:{
        Book,
    }
}
</script>