<template>
    <div class="base-range">
        <label
            :for="label"
            class="range-text"
        >{{label}}</label>
        <div class="input-wrapper">
            <input
                type="number"
                v-model.number="numberValue"
                @input="$emit('input', updateValue($event))"
                step="1"
                :min="min"
                :max="max"
                :id="label"
            />
            <input
                type="range"
                v-model.number="rangeValue"
                @input="$emit('input', updateValue($event))"
                step="1"
                :min="min"
                :max="max"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: 'BaseRange',
    data() {
        return {
            numberValue: this.value,
            rangeValue: this.value,
        }
    },
    props: {
        label: {
            type: String,
            default: '',
        },
        min: {
            type: Number,
            default: 4,
        },
        max: {
            type: Number,
            default: 50,
        },
        value: {
            type: Number,
            default: 12,
        },
    },
    methods: {
        updateValue(e) {
            this.numberValue = parseInt(e.target.value)
            this.rangeValue = parseInt(e.target.value)
            return parseInt(e.target.value)
        },
    },
}
</script>

<style scoped>
label {
    color: var(--color-primary2)
}
.range-text {
    margin-bottom: 1rem;
}
.input-wrapper {
    display: flex;
    align-items: center;
}

input[type='range'] {
    flex: 2 1 50%;
}

@media (max-width: 1280px) {
    .input-wrapper > div {
        width: 100%;
        margin-bottom: 0.5rem;
    }
}

input[type='number'] {
    width: 80px;
    height: 30px;
    text-align: center;
    appearance: none;
    padding: 8px;
    border: 2px solid white;
    border-radius: 5px;
    appearance: none;
    outline: none;
    font-size: 16px;
    font-family: var(--font-family);
    margin-right: 10px;
}

input[type='number']:focus {
    border: 2px solid var(--color-primary7);
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type='range'] {
    -webkit-appearance: none;
    background: transparent;
}

input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
}

input[type='range']:focus {
    outline: none;
}

input[type='range']::-webkit-slider-thumb {
    background-color: var(--color-primary3);
    height: 26px;
    width: 26px;
    border-radius: 50%;
    cursor: pointer;
    margin-top: -9px;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
}

input[type='range']::-moz-range-thumb {
    background-color: var(--color-primary3);
    height: 26px;
    width: 26px;
    border-radius: 50%;
    cursor: pointer;
    margin-top: -8px;
    border: none;
}

input[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    background: var(--color-primary7);
    border-radius: 5px;
}

input[type='range']:focus::-webkit-slider-runnable-track {
    background: var(--color-primary7);
}

input[type='range']::-moz-range-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    background: var(--color-primary7);
    border-radius: 5px;
}
</style>