<template>
    <div>
        <Header />
        <Nuxt />
        <div class="content">
            <h2>Die besten Passwort Tipps</h2>
            <div class="image-text">
                <div class="image">
                    <img
                        src="~assets/img/password1.svg"
                        alt="password1"
                    >
                </div>
                <div class="text">
                    <div class="text-item">
                        <p class="headline"><strong>Benutze immer ein einzigartiges Passwort</strong> für jeden Account den du erstellt.</p>
                        <p>Bei Sicherheitslücken einer Seite ist es für Hacker sehr einfach das selbe Passwort und Nutzername für andere Logins zu benutzen.</p>
                    </div>
                    <div class="text-item">
                        <p class="headline"><strong>Ein Passwort sollte immer mindestens 12 Zeichen lang sein</strong></p>
                        <p>Kurze Zeichenketten haben weniger Kombinationen und können somit leichter geknackt werden.</p>
                    </div>
                    <div class="text-item">
                        <p class="headline"><strong>Vermeide einfache, weit verbreitete Passwörter wie 123456 oder password</strong></p>
                        <p>Diese Passwörter haben meist nicht nur wenige Zeichen, sie sind auch jedermann bekannt.</p>
                    </div>
                </div>

            </div>
            <div class="image-text mobile-reverse">
                <div class="text">
                    <div class="text-item">
                        <p class="headline"><strong>Keine personenbezogenen Daten</strong> innerhalb des Passworts</p>
                        <p>Name, Geburtsdatem, Adresse - Solche Daten sind meist im Internet zu finden und somit auch von jedem einsehbar. Auch wen sie leicht zu merken sind, sollten diese vermieden werden um die Passwortsicherheit zu gewährleisten.</p>
                    </div>
                    <div class="text-item">
                        <p class="headline"><strong>Ändere dein Passwort</strong> wenn du einen Grund dafür hast</p>
                        <p>Nachdem du ein Passwort gewollt oder ungewollt geteilt hast, einer Sicherheitslücke zum Opfer gefallen bist oder mindestens einmal im Jahr sollte dein Kennwort geändert werden.</p>
                    </div>
                </div>
                <div class="image">
                    <img
                        src="~assets/img/password2.svg"
                        alt="password1"
                    >
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>

export default {
    name: 'default',
}
</script>

<style>
.image-text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 2rem 0;
}


.image-text .image {
    width: 50%;
    padding: 0 3rem;
}

.image-text .image img {
    width: 100%;
}

.image-text .text {
    width: 50%;
    padding: 2rem;
}

p {
    margin-top: 0;
    margin-bottom: 1.5rem;
    font-size: 18px;
}

.headline {
    margin-bottom: 5px;
}

@media (max-width: 1280px) {
    .image-text .image,
    .image-text .text {
        width: 100%;
    }

    .image-text.mobile-reverse {
        flex-direction: column-reverse;
    }
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
