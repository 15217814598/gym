<template>
    <el-container>
        <el-aside width="200px"><nav-menu class="nav-menu-style"></nav-menu></el-aside>
        <el-container>
            <el-header class="nav-header"><nav-header class="nav-header-item"></nav-header></el-header>
            <el-main>
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

<style scoped>
    .nav-header {
        background-color: #00ffff;
        display: table;
    }
    .nav-header-item {
        display: table-cell;
        vertical-align: middle;
    }
    .nav-menu-style {
        height: 100%;
        text-align: left;
    }
</style>
