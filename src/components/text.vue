<template>
	<div>
		<Loading v-if="isLoading" />
	</div>

</template>

<script>
import Loading from '@/components/Loading1';
export default {
    data(){
        return {
            isLoading : true
        }
    },
    activated(){
    	//Loading效果
			this.isLoading = false;
    },
  components:{
      Loading
  }
}
</script>
