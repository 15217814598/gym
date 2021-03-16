<template>
    <div>
        <el-dialog :title="title" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
            <el-form ref="form" :model="form" label-width="80px" class="form">
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="用户账号:">
                            <el-input v-model="form.userId" suffix-icon="el-icon-search"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="会员卡号:">
                            <el-input v-model="form.memberCard"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="办理费用:">
                            <el-input v-model="form.cost" type="number"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="剩余次数:">
                            <el-input v-model="form.remainingTimes" type="number"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="剩余天数:">
                            <el-input v-model="form.remainingDays" type="number"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="是否过期:">
                            <el-checkbox v-model="form.overdue" size="medium"></el-checkbox>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="教练名称:">
                            <el-input v-model="form.coach"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </el-dialog>

        <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
    </div>
</template>
<script>
    import colData from './js/colData.js'
    export default {
        name: "form-component2",
        data() {
            return {
                form: {
                    userId: "",
                    memberCard: "",
                    cost: "",
                    remainingTimes: "",
                    remainingDays: "",
                    overdue: false,
                    coach: "",
                },
                colData: colData
            }
        },
        props: ['title', 'dialogVisible'],
        methods: {
            onSubmit() {
                console.log('submit!');
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
            }
        }
    }
</script>

<style scoped>
    .form {
        margin: 0px 10px;
        background: #FFFFFF;
    }
    .el-col {

    }

</style>
