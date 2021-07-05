<template>
  <div class="body">
    <div class="loader"></div>
    <div class="load_title">正在加载系统资源，请耐心等待</div>
  </div>
</template>

<script>
export default {
  name: "Loading",
};
</script>

<style scoped>
.loader {
  position: relative;
  width: 2.5em;
  height: 2.5em;
  transform: rotate(165deg);
}
.loader:before,
.loader:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 0.5em;
  height: 0.5em;
  border-radius: 0.25em;
  transform: translate(-50%, -50%);
}
.loader:before {
  animation: before 2s infinite;
}
.loader:after {
  animation: after 2s infinite;
}

@keyframes before {
  0% {
    width: 0.5em;
    box-shadow: 1em -0.5em rgba(20, 109, 225, 0.75),
      -1em 0.5em rgba(111, 202, 220, 0.75);
  }
  35% {
    width: 10em;
    box-shadow: 0 -0.5em rgba(20, 109, 225, 0.75),
      0 0.5em rgba(111, 202, 220, 0.75);
  }
  70% {
    width: 0.5em;
    box-shadow: -1em -0.5em rgba(20, 109, 225, 0.75),
      1em 0.5em rgba(111, 202, 220, 0.75);
  }
  100% {
    box-shadow: 1em -0.5em rgba(20, 109, 225, 0.75),
      -1em 0.5em rgba(111, 202, 220, 0.75);
  }
}
@keyframes after {
  0% {
    height: 0.5em;
    box-shadow: 0.5em 1em rgba(82, 184, 61, 0.75),
      -0.5em -1em rgba(233, 169, 32, 0.75);
  }
  35% {
    height: 10em;
    box-shadow: 0.5em 0 rgba(82, 184, 61, 0.75),
      -0.5em 0 rgba(233, 169, 32, 0.75);
  }
  70% {
    height: 0.5em;
    box-shadow: 0.5em -1em rgba(82, 184, 61, 0.75),
      -0.5em 1em rgba(233, 169, 32, 0.75);
  }
  100% {
    box-shadow: 0.5em 1em rgba(82, 184, 61, 0.75),
      -0.5em -1em rgba(233, 169, 32, 0.75);
  }
}


.body {
  height: 100%;
  background-color: #5479BC;
}

.loader {
  position: absolute;
  top: calc(50% - 1.25em);
  left: calc(50% - 1.25em);

}
.load_title {
  font-family: "Open Sans";
  color: #253B62;
  font-size: 19px;
  width: 100%;
  text-align: center;
  z-index: 999;
  position: absolute;
  top: 50%;
  opacity: 1;
  line-height: 30px;
  margin-top: 86px;
  
}
</style>

