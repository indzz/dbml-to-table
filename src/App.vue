<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-md-6">
          <code-input v-model="code" />
          <div class="text-right">
            <button type="button" class="btn btn-success" @click="convert">Convert &raquo;</button>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <db-tables v-model="dbml" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CodeInput from "@/components/CodeInput.vue";
import DbTables from "@/components/DbTables.vue";

@Component({
  components: {
    DbTables,
    CodeInput,
  },
})
export default class App extends Vue {
  code: string = "";
  dbml: string = "";

  convert() {
    this.dbml = this.code;
  }
}
</script>

<style lang="scss">
@import "./assets/bootstrap";
#dbml_code {
  height: 80vh;
}
</style>
