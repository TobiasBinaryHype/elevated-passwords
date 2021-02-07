<template>
    <div class="header">
        <div class="header-wrapper">
            <nuxt-link
                to="/"
                class="logo"
            >Elevated Passwords</nuxt-link>
            <nav>
                <nuxt-link class="nav-item" to="/htpasswd">htpasswd</nuxt-link>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style scoped>
a {
    display: block;
}
.header {
    background-color: var(--color-lightgray);
}

.header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: var(--content-width);
    max-width: 98%;
    margin: 0 auto; 
}

@media (max-width: 1280px) {
    .header-wrapper {
        width: 90%;
        max-width: 98%;
    }
}

.logo {
    font-size: 22px;
    font-weight: 600;
}

.nav-item,
.logo {
    padding: 1rem;
}

.logo:first-child {
    padding-left: 0;
}

.nav-item:last-child {
    padding-right: 0;
}

nav .nuxt-link-active {
    color: var(--color-highlight);
}
</style>