<template>
    <div>
        <div class="generator">
            <div>
                <h1 class="title">
                    Elevated Passwords
                </h1>
                <div class="subheadline">Schnell und sicher ein zufälliges Passwort generieren.
                    Lokal im Browser - ohne Umwege.</div>
                <PasswordGenerator />
            </div>
        </div>
        <Content />
    </div>
</template>

<script>
import Content from '~/components/Content.vue'

export default {
    components: { Content },
    name: 'Index',
    head() {
        return {
            title: 'Passwort Generator',
        }
    },
}
</script>

<style>
.generator {
    max-width: 100%;
    width: 40%;
    margin: 2rem auto;
}

@media (max-width: 1280px) {
    .generator {
        width: 90%;
        max-width: 98%;
    }
}
.subheadline {
    margin-bottom: 2rem;
}
</style>
