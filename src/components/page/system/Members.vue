<template>
    <div>
        <table-component :tableData="memberDatas.datas" :colData="memberDatas.cols" @create="createNew"></table-component>
        <form-component :title="新增" :dialogVisible="dialogVisible"></form-component>
    </div>
</template>

<script>
    import TableComponent from '../../public/TableComponent.vue'
    import FormComponent from '../../public/FormComponent.vue'
    import memberDatas from '../../js/members.js'
    export default {
        name: 'members',
        components: {TableComponent},
        data() {
            return {
                memberDatas: memberDatas,
                dialogVisible: false
            }
        },
        methods: {
            createNew () {
                this.dialogVisible = true;
                // this.$http.post('/members')
                // .then((response) => {
                //     console.log("成功");
                // })
                // .catch((response) => {
                //     console.log("失败");
                // })
            }
        }
    }
</script>

<style>
</style>
