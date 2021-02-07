<template>
    <form
        @submit.prevent="generateHtpasswd"
        class="htpasswd-generator"
    >
        <div class="username-password">
            <BaseInput
                label="Benutzername"
                v-model="username"
            />
            <BaseInput
                label="Passwort"
                v-model="password"
            />
        </div>
        <BaseRadioGroup
            v-model="selectedCryptType"
            name="cryptTypes"
            :options="cryptTypes"
        />
        <div
            class="error"
            v-if="error"
        >{{error}}</div>
        <BaseSubmit label=".htpasswd generieren" />
    </form>
</template>
<script>
import PasswordService from '@/services/PasswordService'

export default {
    name: 'HtpasswdGenerator',
    data() {
        return {
            result: '',
            username: '',
            password: '',
            selectedCryptType: '',
            cryptTypes: [
                { label: 'md5', value: 'md5' },
                { label: 'sha1', value: 'sha1' },
            ],
            error: '',
        }
    },
    methods: {
        generatePassword() {
            try {
                this.error = ''
                this.resultPassword = PasswordService.generatePassword(
                    this.selectedTypes,
                    this.passwordLength
                )
            } catch (e) {
                this.error = e
            }
        },
    },
}
</script>

<style scoped>
.htpasswd-generator {
    margin: 0 auto;
    background-color: var(--color-primary8);
    border-radius: 26px;
    box-shadow: 0px 3px 11px rgba(45, 106, 79, 0.5);
    padding: 1.5rem;
}

@media (max-width: 1280px) {
    .htpasswd-generator {
        width: 90%;
        max-width: 98%;
    }
}

.username-password {
    display: flex;
    justify-content: space-between;
}

.username-password > * {
    flex: 1 1 50%;
    padding: 1rem 2rem;
}

.error {
    text-align: center;
    color: red;
    margin: 0.5rem 0;
}
</style>