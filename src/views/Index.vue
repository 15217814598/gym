<template>
    <el-container class="container">
        <el-header class="nav-header"><nav-header class="nav-header-item"></nav-header></el-header>
        <el-container >
            <el-aside width="200px"><nav-menu class="nav-menu-style"></nav-menu></el-aside>
            <el-main class="nav-main">
                <router-view v-if="isRouterAlive"/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import NavHeader from '../components/public/NavHeader.vue'
    import NavMenu from '../components/public/NavMenu.vue'
    export default {
        name: "Index",
        components: {NavMenu, NavHeader},
        data () {
            return {
                isRouterAlive: true
            }
        },
        provide () {
            return {
                reload: this.reload
            }
        },
        methods: {
            reload () {
                this.isRouterAlive = false
                this.$nextTick(() => {
                    this.isRouterAlive = true
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .nav-header {
        background: linear-gradient(to right, rgb(0, 0, 0) , rgba(253, 249, 249,0.5));
        display: table;
        border: none;
    }
    .container{
        margin: -1px 0 0 0;
        background-size:100% 100%;
    }
    .nav-header-item {
        display: table-cell;
        vertical-align: middle;
        border: none;
    }
    .nav-menu-style {
        height: 100%;
        text-align: left;
    }
    
</style>
