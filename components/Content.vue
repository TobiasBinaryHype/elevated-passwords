<template>
    <div class="content">
        <h2>Die besten Passwort Tipps</h2>
        <ImageText
            :textItems="passwordTips1"
            :image="image1"
        ></ImageText>
        <ImageText
            :textItems="passwordTips2"
            :image="image2"
            :reversed="true"
        ></ImageText>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Content',
    computed: {
        ...mapState({
            image1: (state) => state.image1,
            passwordTips1: (state) => state.tips1,
            image2: (state) => state.image2,
            passwordTips2: (state) => state.tips2,
        }),
    },
}
</script>

<style scoped>
h2 {
    text-align: center;
}
.content {
    padding: 2rem 0;
}
</style>