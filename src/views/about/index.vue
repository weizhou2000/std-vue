<template>
  <div class="about">
    <h1>This is an about page--{{msg}}</h1>
    <button @click='linkSvc({"svc":"t1",data:1})'>req t1</button>
    <button @click='linkSvc({"svc":"t2",data:2})'>req t2</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import linkSvc from '../../mixins/linkSvc';
import Svc from './svc';

@Component({
  mixins: [linkSvc],
})
export default class About extends Vue {
  private svc: any;
  private msg: string = 'weclome0';
  public created() {
    this.svc = new Svc(this);
  }
}
</script>
