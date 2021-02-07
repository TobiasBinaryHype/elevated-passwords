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
            label="Verschlüsselungsmethode"
        />
        <BaseInput
            v-model="result"
            :bigFont="true"
            :readonly="true"
            label="Ergebnis"
            class="result"
        ></BaseInput>
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
            selectedCryptType: 'md5',
            cryptTypes: [
                { label: 'md5', value: 'md5' },
                { label: 'sha1', value: 'sha1' },
            ],
            error: '',
        }
    },
    methods: {
        generateHtpasswd() {
            try {
                this.error = ''
                this.result = PasswordService.generateHash(
                    this.username,
                    this.password,
                    this.selectedCryptType
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
    padding: 2rem;
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
    margin-bottom: 2rem;
}

@media (max-width: 768px) {
    .username-password {
        flex-direction: column;
        justify-content: center;
    }

    .username-password > * {
        flex: 1 1 100%;
        padding: 0 !important;
        margin-bottom: 0.5rem;
    }
}

.username-password > * {
    flex: 1 1 50%;
}

.username-password > *:first-child {
    padding-right: 2rem;
}

.username-password > *:last-child {
    padding-left: 2rem;
}

.result {
    margin-bottom: 2rem;
}

.error {
    text-align: center;
    color: red;
    margin: 0.5rem 0;
}
</style>