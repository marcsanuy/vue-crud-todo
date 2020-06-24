<template>
    <div>

    </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required , minLength } from 'vuelidate/lib/validators'
export default {
    mixins: [validationMixin],
    props: {
        todo: {
            type: Object,
            required: true
        },
        todoSubmit: {
            type: String,
            default: 'Crear Todo'
        }
    },
    validations: {
        todo: {
            text: {
                required, minLength: minLength(4)
            }
        }
    }
}
</script>>