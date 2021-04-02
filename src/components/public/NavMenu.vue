<template>
   <div>
            <el-menu class="height-full"
                     background-color="rgba(253, 249, 249,0.5)"
                     text-color="rgba(53, 48, 48, 0.5)"
                     active-text-color="rgb(111, 173, 189)"
                     :default-active="this.$route.path"
                     router>
                <div>
                    <template>
                        <el-row class="">
                            <el-col :span="24">
                                <div class="head">
                                    <div style="text-align: center"><el-avatar :size="60" :src="headURL"></el-avatar></div>
                                </div>
                                <div class="user-style">
                                    <span>admin</span>
                                </div>
                            </el-col>
                        </el-row>
                    </template>
                </div>
                <el-submenu :index="one.index" v-for="(one, index) in menuMap" :key="index">
                    <template slot="title">
                        <i :class="one.icon"></i>
                        <span>{{one.title}}</span>
                    </template>
                    <el-menu-item :index="second.path" v-for="(second, index1) in one.items" :key="index1" @click="test(second)">{{ second.title }}</el-menu-item>
                </el-submenu>
            </el-menu>
            </div>
</template>

<script>
import menus from './js/menus'

export default {
    name: 'nav-menu',
    data () {
        return {
            headURL: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=610091366,2089074229&fm=26&gp=0.jpg',
            menuMap: []
        }
    },
    methods: {
        test (second) {
           
        }
    },
    created () {
        this.menuMap = menus
        console.log(this.menuMap)
    }
}
</script>

<style scoped>
.height-full {
    height: 100%;
}
.head {
    padding: 50px 50px 10px 50px;
}
.el-menu{
    border: none;
}
.user-style {
    padding-bottom: 25px;
    color: rgb(111, 173, 189);
    text-align: center;
}
</style>
