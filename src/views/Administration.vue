<template>
  <div>
      <Table @restartAll="restartComments"/>
  </div>
</template>

<script>
import Table from '@/components/Table';
export default {
    name: 'Administration',
    components: {
        Table
    },

    methods: {
    restartComments(){
       this.$store.state.comments = [];
    }
  }
}
</script>

<style>

</style>