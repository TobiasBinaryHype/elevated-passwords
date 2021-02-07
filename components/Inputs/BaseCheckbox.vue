<template>
    <label :for="label" class="slidercheckbox">
        <input
            type="checkbox"
            :checked="value"
            :id="label"
            @change="$emit('input', $event.target.checked)"
        >
        <div class="slider">
            <div class="bullet"></div>
        </div>
        <div class="text">{{label}}</div>
    </label>
</template>

<script>
export default {
    name: 'BaseCheckbox',
    props: {
        label: {
            type: String,
            default: '',
        },
        value: {
            type: Boolean,
            default: false,
        },
    },
}
</script>

<style scoped>
label {
    color: var(--color-primary2)
}

.slidercheckbox {
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
}

.slider {
    display: flex;
    width: 50px;
    height: 28px;
    padding: 3px;
    margin-right: 10px;
    background-color: var(--color-primary7);
    border-radius: 34px;
    transition: 0.3s;
}
.bullet {
    width: 50%;
    height: 100%;
    border-radius: 50%;
    background-color: white;
    transition: 0.3s;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);
}

input:checked + .slider {
    background-color: var(--color-primary3);
}

input:checked + .slider .bullet {
    transform: translateX(100%);
}

input {
    display: none;
}
</style>