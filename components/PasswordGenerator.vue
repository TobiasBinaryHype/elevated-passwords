<template>
    <form
        @submit.prevent="generatePassword"
        class="password-generator"
    >
        <BaseInput
            v-model="resultPassword"
            :bigFont="true"
            :readonly="true"
            label="Ergebnis"
        ></BaseInput>
        <div class="generator-inputs">
            <BaseRange
                label="Passwortlänge"
                v-model="passwordLength"
                :max="30"
                :min="4"
            />
            <div class="generator-checkboxes">
                <BaseCheckbox
                    label="Zahlen"
                    v-model="selectedTypes.numeric"
                />
                <BaseCheckbox
                    label="Großbuchstaben"
                    v-model="selectedTypes.upper"
                />
                <BaseCheckbox
                    label="Sonderzeichen"
                    v-model="selectedTypes.special"
                />
                <BaseCheckbox
                    label="Kleinbuchstaben"
                    v-model="selectedTypes.lower"
                />

            </div>
            <div class="error" v-if="error">{{error}}</div>
        </div>
            <BaseSubmit label="Passwort generieren" />
    </form>
</template>
<script>
import PasswordService from '@/services/PasswordService';

export default {
    name: 'PasswordGenerator',
    data() {
        return {
            resultPassword: '',
            passwordLength: 12,
            selectedTypes: {
                numeric: true,
                special: true,
                lower: true,
                upper: true
            },
            error: '',
        }
    },
    methods: {
        generatePassword() {
            try {
                this.error = '';
                this.resultPassword = PasswordService.generatePassword(this.selectedTypes, this.passwordLength);
            } catch(e) {
                this.error = e
            }
        },
    },
    mounted() {
        this.generatePassword();
    }
}
</script>

<style scoped>
.password-generator {
    margin: 0 auto;
    background-color: var(--color-primary8);
    border-radius: 26px;
    box-shadow: 0px 3px 11px rgba(45, 106, 79, 0.5);
    padding: 1.5rem;
}

@media (max-width: 1280px) {
    .password-generator {
        width: 90%;
        max-width: 98%;
    }
}

.generator-inputs {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 80%;
    margin: 1rem auto;
}

@media (max-width: 920px) {
    .generator-inputs {
        flex-direction: column;
        margin: 1rem auto;
        width: 100%
    }

    .generator-inputs > *:not(:last-child) {
        margin-bottom: 10px;
    }
}

.generator-inputs > *:first-child {
    padding-right: 1rem;
    margin-bottom: 1rem;
}

.generator-inputs > *:last-child {
    padding-left: 1rem;
}

.generator-checkboxes {
    display: grid;
    grid-template-columns: 50% 50%;
}

.generator-checkboxes > * {
    justify-self: center;
    padding: 7px;
}
.generator-checkboxes > *:nth-child(odd) {
    justify-self: start;
}
.generator-checkboxes > *:nth-child(even) {
    justify-self: start;
}

@media (max-width: 680px) {
    .generator-checkboxes {
        grid-template-columns: 100%;
    }

    .generator-checkboxes > * {
        justify-self: start !important;
    }
}

.error {
    text-align: center;
    color: red;
    margin: .5rem 0;
}
</style>