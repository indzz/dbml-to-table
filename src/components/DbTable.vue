<template>
    <div class="db-table">
        <h3>{{table.name}}</h3>
        <p v-if="table.note">{{table.note}}</p>
        <table class="table table-dense table-bordered">
            <thead>
            <tr>
                <th style="width: 15%">Field</th>
                <th style="width: 15%">Type</th>
                <th style="width: 10%">Nullable?</th>
                <th>Notes</th>
            </tr>
            </thead>
            <tbody>
            <db-field v-for="field in table.fields" :field="field" />
            </tbody>
        </table>

        <div class="db-table-index" v-if="table.indexes.length > 0">
            <h4>Index</h4>
            <table class="table table-dense table-bordered">
                <thead>
                <tr>
                    <th style="width: 20%; text-align: left">Name</th>
                    <th style="width: 20%; text-align: left">Column(s)</th>
                    <th style="text-align: left">Notes</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="index in table.indexes">
                    <th style="text-align: left">{{index.name || `${table.name}_${columnsConcat(index.columns, '_')}`}}</th>
                    <td>{{columnsConcat(index.columns, ', ')}}</td>
                    <td>
                        <span class="badge badge-primary mr-1" v-if="index.pk === true">[pk]</span>
                        <span class="badge badge-warning mr-1" v-if="index.unique === true">[unique]</span>
                        <div v-if="index.note">{{index.note}}</div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

        <hr />
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import {IndexColumn, Table} from "@dbml/core";
    import DbField from "@/components/DbField.vue";
    @Component({
        components: {DbField}
    })
    export default class DbTable extends Vue {
        @Prop() private table!: Table;

        columnsConcat(columns: IndexColumn[], glue: string): string {
            return columns.map(c => c.value).join(glue)
        }
    }
</script>