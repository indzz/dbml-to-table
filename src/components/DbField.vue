<template>
    <tr>
        <th>{{field.name}}</th>
        <td>{{field.type.type_name}}</td>
        <td>{{field.not_null === false ? 'Yes' : ''}}</td>
        <td>
            <span class="badge badge-primary mr-1" v-if="field.pk === true">pk</span>
            <span class="badge badge-secondary mr-1" v-if="field.increment === true">increment</span>
            <span class="badge badge-warning mr-1" v-if="field.unique === true">unique</span>

            <template v-for="endpoint in field.endpoints"
                      v-if="endpoint.relation === '*' && endpoint.ref != null && endpoint.ref.endpoints.length > 0">
                <span class="badge badge-info mr-1">
                    fk -&gt; {{endpoint.ref.endpoints[0].tableName}}.{{endpoint.ref.endpoints[0].fieldName}}
                </span>
            </template>

            <div v-if="field.note">{{field.note}}</div>
        </td>
    </tr>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import {Field} from "@dbml/core";
    @Component({
        components: {DbField}
    })
    export default class DbField extends Vue {
        @Prop() private field!: Field;
    }
</script>