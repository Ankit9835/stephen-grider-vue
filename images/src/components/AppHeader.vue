<template>
    <div class="ui secondary pointing menu">
        <a href="/" class="active item">
            Image Header
            
        </a>
  
        <div class="right menu">
            <div v-if = "isLoggedIn" class="horizontal">
               <a class="item" href="">Gallery</a>
               <a class="item" href="">Upload</a>
               <a class="item"  @click="logout">Logout</a>
            </div> 
            <a v-else href = "#" @click="login">
                Login
            </a>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

    export default{
        name:'AppHeader',
        computed: mapGetters(['isLoggedIn']),
        methods: mapActions(['login','logout']),
    }
</script>

<style scoped>
    .horizontal{
        display: flex;
        flex-direction: row;
    }
</style>
