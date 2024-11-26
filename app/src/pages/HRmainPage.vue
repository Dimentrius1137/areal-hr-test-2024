
<template>
    <div class="hr-container">
        <h1>HR Page</h1>
        <organizationList/>
    </div>
</template>

<script>
import organizationList from '@/modules/organizations/widgets/organization-list.vue';
export default{
        components: {
            organizationList
        },
        data(){
            return{

            }
        },
    }
</script>

<style scoped lang="scss">
    .hr-container{
        padding: 35px
        ;
        display: flex;
        flex-direction: column;
    }
</style>
