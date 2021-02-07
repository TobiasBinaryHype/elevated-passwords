<template>
    <div>
        <Header />
        <Nuxt />
        <Footer />
    </div>
</template>

<script>
export default {
    name: 'default',
    head() {
        return {
            titleTemplate: '%s - Elevated Passwords',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content:
                        'Verwenden Sie den Online-Passwortgenerator um schnell und einfach ein sicheres Passwort zu erstellen.',
                },
            ],
        }
    },
}
</script>

<style>
.content {
    width: var(--content-width);
    max-width: 98%;
    margin: 0 auto;
}
</style>