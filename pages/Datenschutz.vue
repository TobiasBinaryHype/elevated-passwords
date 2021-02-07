<template>
    <div
        v-html="datenschutz"
        class="content"
    >
    </div>
</template>

<script>
import html from "@/assets/content/datenschutz.js";

export default {
    name: "Datenschutz",
    data() {
        return {
            datenschutz: html,
        };
    },
    props: {},
};
</script>

<style scoped>
</style>
