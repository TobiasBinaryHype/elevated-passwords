<template>
    <div>
        <label :for="label" v-if="label">{{ label }}</label>
        <input
            :value="value"
            @input="$emit('input', $event.target.value)"
            type="text"
            :class="{'big-font': bigFont}"
            :readonly="readonly"
            :id="label"
        >
    </div>
</template>

<script>
export default {
    name: 'BaseInput',
    props: {
        label: {
            type: String,
            default: '',
        },
        value: {
            type: [String, Number],
            default: '',
        },
        bigFont: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
    },
}
</script>

<style scoped>
input {
    border: none;
    outline: none;
    border-radius: 15px;
    width: 100%;
    padding: 13px;
    font-family: var(--font-family);
    color: var(--color-primary3);
    font-size: 20px;
}

label {
    color: var(--color-primary3)
}

.big-font {
    font-size: 26px;
}
</style>