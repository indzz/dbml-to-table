<template>
    <div class="form-group">
        <label for="dbml_code">DBML</label>
        <textarea v-model="code" id="dbml_code" class="form-control"></textarea>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CodeInput extends Vue {
    @Prop() private value!: string;

    get code(): string {
        return this.value;
    }

    set code(value: string) {
        this.$emit('input', value);
    }
}
</script>