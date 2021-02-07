<template>
    <div>
        <label
            class="radio"
            v-if="label"
            :for="label"
        >
            <input
                type="radio"
                :checked="modelValue === value"
                :value="value"
                v-bind="$attrs"
                @change="$emit('input', value)"
                :id="label"
            />
            <span class="radiobox"></span>
            {{ label }}</label>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: '',
        },
        value: {
            type: [String, Number],
            required: true,
        },
        modelValue: {
            type: [String, Number],
        },
    },
}
</script>

<style scoped>
.radio {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px 1rem;
}

.radiobox {
    position: relative;
    height: 22px;
    width: 22px;
    margin-right: 5px;
    background-color: white;
    border-radius: 50%;
}

input:checked + .radiobox:before {
    position: absolute;
    content: '';
    width: 16px;
    height: 16px;
    background-color: var(--color-primary2);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

span {
    display: inline-block;
}

input {
    display: none;
}
</style>