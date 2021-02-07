<template>
    <div>
        <label v-if="label">{{ label }}</label>
        <input
            :value="value"
            :placeholder="placeholder"
            @input="$emit('input', $event.target.value)"
            type="text"
            :class="{'big-font': bigFont}"
            :readonly="readonly"
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
        placeholder: {
            type: String,
            default: ''
        },
        readonly: {
            type: Boolean,
            default: false
        }
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
    color: var(--color-primary2);
    font-size: 24px;
}

.big-font {
    font-size: 30px;
}
</style>