<template>

    <div>
     <router-link to="/home/yt" tag="div" class="yt">雁滩</router-link>
     <router-link to="/home/hp" tag="div" class="hp">和平</router-link>
     <router-link to="/home/qlh" tag="div" class="qlh">七里河</router-link>
     <router-link to="/home/dl" tag="div" class="dl">定连</router-link>
     <router-link to="/home/jz" tag="div" class="jz">九州</router-link>
  </div>
</template>

<script>
export default {
  components: {},
 
};
</script>

<style scoped>
.yt,.hp,.jz,.dl,.qlh{
  background-color: rgb(248, 126, 126);
  width: 100px;
  height: 100px;
  cursor: pointer;
  margin: 5px;
}

</style>