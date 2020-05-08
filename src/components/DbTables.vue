<template>
    <div>
        <template v-if="errors != null && errors.length > 0">
            <div class="alert alert-danger" v-for="error in errors">
                {{error.message}}
            </div>
        </template>
        <template v-else-if="db != null">
            <h2>{{db.name}}</h2>
            <p v-if="db.note != null">{{db.note}}</p>
            <hr />

            <template v-for="schema in db.schemas" v-if="schema">
                <db-table v-for="table in schema.tables" :table="table" class="mb-4" />
            </template>
        </template>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {Database, Parser} from "@dbml/core";
import DbTable from "@/components/DbTable.vue";
@Component({
    components: {DbTable}
})
export default class DbTables extends Vue {
    @Prop() private value!: string;

    errors: string[] | null = null;

    get code(): string {
        return this.value;
    }

    get db(): Database | null {
        try {
            return Parser.parse(this.code, 'dbml');
        } catch (e) {
            this.errors = [e];
        }

        return null;
    }
}
</script>