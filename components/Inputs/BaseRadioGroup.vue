<template>
    <div>
        <div
            v-for="option in options"
            :key="option.value"
        >
            <BaseRadio
                :label="option.label"
                :value="option.value"
                :modelValue="modelValue"
                :name="name"
                @update:modelValue="$emit('input', $event)"
            />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        options: {
            type: Array,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        value: {
            type: [String, Number],
        },
        modelValue: {
            type: [String, Number],
            default: '',
        },
    }
}
</script>

<style scoped>
</style>