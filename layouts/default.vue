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

p,
h1,
h2,
h3,
h4 {
    color: var(--color-primary2);
}

@media (max-width: 480px) {
    h1 {
        font-size: 1.5em;
        text-align: left;
    }

    h2 {
        text-align: left;
        font-size: 1.2em;
    }
}
</style>