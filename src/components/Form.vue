<template>
    <div class="container">
        <div class="row">
            <div class="form-group">
                <label for="key">Chave:</label>
                <input type="number" id="key" class="form-control" placeholder="Chave" v-model="crypt.key"/>
            </div>
            
            <div class="form-group">
                <label for="text">Texto:</label>
                <textarea id="text" class="form-control" placeholder="Texto" v-model="crypt.text"></textarea>
            </div>
            
            <div class="form-group">
                <button class="btn btn-primary" v-on:click="sendCrypt">Criptografar</button>
            </div>

            <div class="form-group">
                {{ crypted }}
            </div>
        </div>
    </div>
</template>

<style scoped>
    textarea {
        resize: none;
    }

    .form-group {
        margin-bottom: 20px;
    }
</style>

<script>
    import Api from '../services/api'

    export default {
        name: 'Form',

        data() {
            return {
                crypt: {
                    key: 5,
                    text: ''
                },

                crypted: ''
            }
        },
        methods: {
            sendCrypt() {
                Api.sendCrypt((res) => {
                    this.crypted = `Texto Criptografado: ${res.data.message}`
                }, this.crypt.key, this.crypt.text)
            }
        }
    }
</script>
