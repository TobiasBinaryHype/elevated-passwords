<template>
    <div>
        <div class="generator">
            <h1 class="title">
                Elevated Passwords
            </h1>
            <div class="subheadline">Schnell und sicher ein zufälliges Passwort generieren.
                Lokal im Browser - ohne Umwege.</div>
            <HtpasswdGenerator />
        </div>
        <Content />
    </div>
</template>

<script>
import Content from '~/components/Content.vue'

export default {
    name: 'Htpasswd',
    components: {
        Content
    },
    head() {
        return {
            title: '.htpasswd Generator',
        }
    },
}
</script>

<style scoped>
.generator {
    max-width: 100%;
    width: var(--generator-width);
    margin: 2rem auto;
}

.subheadline {
    color: var(--color-primary3);
    margin-bottom: 2rem;
}
</style>