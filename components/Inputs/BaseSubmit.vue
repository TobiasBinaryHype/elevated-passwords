<template>
    <div>
        <button
            type="submit"
            @submit="$emit('submit')"
        >{{label}}</button>
    </div>
</template>

<script>
export default {
    name: 'BaseSubmit',
    props: {
        label: {
            type: String,
            required: true,
            default: 'Absenden',
        },
    },
}
</script>

<style scoped>
div {
    display: flex;
    justify-content: center;
    padding: 1rem 0;
}

button {
    border: none;
    background-color: var(--color-highlight);
    color: var(--color-primary2);
    font-family: var(--font-family);
    padding: 12px;
    border-radius: 10px;
    font-size: 16px;
    box-shadow: 0px 0px 5px rgba(239, 143, 34, 0.7);
    cursor: pointer;
    outline: none;
    transition: all .2s ease;
}

button:hover {
    color: white;
}
</style>