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
    margin: 1rem;
}

.logo:first-child {
    margin-left: 0;
}

.nav-item:last-child {
    margin-right: 0;
}

.nav-item {
    font-weight: 600
}

nav .nuxt-link-active {
    border-bottom: 2px solid var(--color-highlight);
}
</style>