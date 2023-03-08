<template >
        <div>
            <img src="../../assets/image/Thumbnail.png" alt="book image">
        </div>
        <div>
            <span>
                {{ title }}
            </span>
            <div>
                <span>
                    {{ currentPrice }}
                </span>
                <span>{{ oldPrice }}</span>
            </div>
        </div>
</template>

<script>
export default {
    name: 'Book',
    data(){
        return{
            title:'SGK Địa Lý 12',
            currentPrice: '30.000 đ',
            oldPrice: '30.000 đ'
        }
    }
}
</script>