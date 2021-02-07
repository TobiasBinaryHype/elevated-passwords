<template>
    <div class="generator">
        <h1 class="title">
                Elevated Passwords
            </h1>
            <div class="subheadline">Schnell und sicher ein zufälliges Passwort generieren.
                Lokal im Browser - ohne Umwege.</div>
        <HtpasswdGenerator />
    </div> 
</template>

<script>
export default {
    name: 'Htpasswd',
    head() {
        return {
            title: 'Htpasswd Generator',
        }
    },
}
</script>

<style scoped>
</style>