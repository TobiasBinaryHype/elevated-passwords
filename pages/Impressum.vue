<template>
    <div
        v-html="impressum"
        class="content"
    >
    </div>
</template>

<script>
import html from "@/assets/content/impressum.js";

export default {
    name: "Datenschutz",
    data() {
        return {
            impressum: html,
        };
    },
    props: {},
};
</script>

<style scoped>
</style>
