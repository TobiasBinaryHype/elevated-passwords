<template>
    <div>
        <div
            v-for="option in options"
            :key="option.value"
        >
            <BaseRadio
                :label="option.label"
                :value="option.value"
                :name="name"
                :modelValue="value"
                @input="$emit('input', $event)"
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
    },
}
</script>

<style scoped>
</style>