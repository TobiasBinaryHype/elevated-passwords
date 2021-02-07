<template>
    <div>
        <Header />
        <Nuxt />
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
                        'Where you can find all the events taking place in your neighborhood',
                },
            ],
        }
    },
    data() {
        return {
            passwordTips1: [
                {
                    headline:
                        'Benutze immer ein einzigartiges Passwort für jeden Account den du erstellt',
                    text:
                        'Bei Sicherheitslücken einer Seite ist es für Hacker sehr einfach das selbe Passwort und Nutzername für andere Logins zu benutzen.',
                },
                {
                    headline:
                        'Ein Passwort sollte immer mindestens 12 Zeichen lang sein',
                    text:
                        'Kurze Zeichenketten haben weniger Kombinationen und können somit leichter geknackt werden.',
                },
                {
                    headline:
                        'Vermeide einfache, weit verbreitete Passwörter wie 123456 oder password',
                    text:
                        'Diese Passwörter haben meist nicht nur wenige Zeichen, sie sind auch jedermann bekannt.',
                },
            ],
            passwordTips2: [
                {
                    headline:
                        'Keine personenbezogenen Daten innerhalb des Passworts',
                    text:
                        'Name, Geburtsdatem, Adresse - Solche Daten sind meist im Internet zu finden und somit auch von jedem einsehbar. Auch wen sie leicht zu merken sind, sollten diese vermieden werden um die Passwortsicherheit zu gewährleisten.',
                },
                {
                    headline:
                        'Ändere dein Passwort wenn du einen Grund dafür hast',
                    text:
                        'Nachdem du ein Passwort gewollt oder ungewollt geteilt hast, einer Sicherheitslücke zum Opfer gefallen bist oder mindestens einmal im Jahr sollte dein Kennwort geändert werden.',
                },
            ],
            image1: {
                url: require('~/assets/img/password1.svg'),
                alt: 'password1lul',
            },
            image2: {
                url: require('~/assets/img/password2.svg'),
                alt: 'password2lul',
            },
        }
    },
}
</script>

<style>
h2 {
    text-align: center;
}

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
</style>

<style scoped>
.content {
    padding: 2rem 0;
}
</style>