<template>
    <div
        class="image-text"
        :class="{reversed: reversed}"
    >
        <div class="image">
            <img
                :src="image.url"
                :alt="image.alt"
            >
        </div>
        <ul class="text">
            <li
                class="text-item"
                v-for="(item, index) in textItems"
                :key="index"
            >
                <p class="headline"><strong>{{item.headline}}</strong></p>
                <p>{{item.text}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ImageText',
    props: {
        image: {
            type: Object,
            required: true,
        },
        textItems: {
            type: Array,
            required: true,
        },
        reversed: {
            type: Boolean,
        },
    },
}
</script>

<style scoped>
.image-text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 2rem 0;
}

.image-text.reversed {
    flex-direction: row-reverse;
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

.headline {
    margin-bottom: 5px;
}

li {
    list-style-type: none;
}

p {
    margin-top: 0;
    margin-bottom: 1.5rem;
    font-size: 18px;
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
</style>