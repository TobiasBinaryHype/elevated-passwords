<template>
    <footer>
        <div class="content">
            <div class="footer-wrapper">
                <nuxt-link
                    class="footer-nav-item"
                    to="/impressum"
                >Impressum</nuxt-link>
                <nuxt-link
                    class="footer-nav-item"
                    to="/datenschutz"
                >Datenschutz</nuxt-link>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style scoped>
a {
    display: block;
}
footer {
    width: 100%;
    margin-top: 2rem;
    background-color: var(--color-primary3);
}

.footer-wrapper {
    display: flex;
    flex-wrap: wrap;
}

.footer-nav-item {
    color: white;
    padding: 1rem;
}

.copyright {
    color: white;
    padding: 1rem;
}

.footer-wrapper a:hover{
    color: var(--color-highlight)
}
</style>