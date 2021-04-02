<template>
    <el-card >
        <div slot="header">
            <el-row>
                <el-button type="primary" icon="el-icon-circle-plus-outline" size="mini" class="div-left" @click="createNew(
                    
                )">
                    新增
                </el-button>
                <el-dropdown @command="exportOrImport" class="div-left">
                    <el-button size="mini" type="primary">
                        数据处理<i class="el-icon-arrow-down el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item v-for="(item, index) in dropdownMenu" :key="index" :command="item.value">{{ item.value }}</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>

                <el-input
                    v-model="search"
                    placeholder="搜索"
                    suffix-icon="el-icon-search"
                    size="mini"
                    class="search"
                ></el-input>
            </el-row>
        </div>
        <div>
            <el-table :data="tableData.data" size="small" stripe highlight-current-row  class="table">
                <el-table-column type="index" :index="index"></el-table-column>
                <el-table-column align="center" v-for="(val, index) in colData" :prop="val.prop" :label="val.label" :key="index"></el-table-column>
                <el-table-column  label="操作" width="165px" align="center" >
                        <el-button type="primary" icon="el-icon-edit"  size="mini" @click="updateNew()"></el-button>
                        <el-button type="danger" icon="el-icon-delete"  size="mini" @click="deleteNew()"></el-button>
                </el-table-column>
            </el-table>
            <hr/>
            <el-pagination
                background
                layout="total, sizes, prev, pager, next, jumper"
                :total="tableData.pageNum"
                :current-page="tableData.currentPage"
                :page-sizes="[10, 20, 30, 50]"
                :page-size="tableData.pageSize"
            >
            </el-pagination>
        </div>
    </el-card>
</template>

<script>
    import dropdownMenu from "./js/dataSource";
    export default {
        name: "table-component",
        data() {
            return {
                search: '',
                index: 1,
                dropdownMenu: dropdownMenu,
                add:'add'
            }
        },
        props: ['tableData', 'colData'],
        model:{
            prop: 'datas'
        },
        methods: {
            exportOrImport(value) {
                if (value == "导出") {
                    alert("导出Excel");
                } else if (value == "导入") {
                    alert("导入Excel");
                }
            },
            createNew() {
                this.$emit('create');
            },
            updateNew() {
                this.$emit('update');
            },
            deleteNew() {
                this.$emit('delete');
            }
        }
    }
</script>

<style scoped>
    .search {
        width: 200px;
        float: right;
    }
    
    .div-left {
        float: left;
        margin-left: 5px;
    }
    
    
</style>
