<template>
    <div class="content">
        <SideMenu/>
        <RouterView/>
    </div>
</template>

<script>
    import SideMenu from '@/shared/SideMenu.vue';
    import { RouterView } from 'vue-router';
    import { mapState } from 'vuex';
    export default{
        components: {
            SideMenu
        },
        data(){
            return{

            }
        },
        computed:{
            ...mapState(['isAuth'])
        },
        created(){
            if(!this.isAuth){
                this.$router.push('/LogIn');
            }
        }
    }
</script>

<style scoped>
    .content{
        display: flex;
        flex-direction: row;
        }
</style>
