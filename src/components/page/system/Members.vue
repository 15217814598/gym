<template>
    <div>
        <table-component :tableData="memberDatas.datas" :colData="memberDatas.cols" @create="createNew" @update="updateNew"></table-component>
        <el-dialog title="新增会员信息" :visible.sync="dialogVisible" width="50%">
            <el-form :model="addForm"  label-width="90px" >
                <el-row :gutter="10">
                    <el-col :span="12">
                          <el-form-item label="卡号" prop="CardNumber">
                            <el-input v-model="addForm.CardNumber"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                         <el-form-item label="办理费用" prop="DealCost">
                            <el-input v-model="addForm.DealCost"></el-input>
                        </el-form-item>
                    </el-col>
                     <el-col :span="12">
                        <el-form-item label="剩余次数" prop="RemainTime">
                            <el-input v-model="addForm.RemainTime"></el-input>
                        </el-form-item>
                    </el-col>
                     <el-col :span="12">
                         <el-form-item label="剩余天数" prop="RemainDay">
                            <el-input v-model="addForm.RemainDay"></el-input>
                        </el-form-item>
                    </el-col>
                     <el-col :span="12">
                        <el-form-item label="是否过期" prop="IsOverdue">
                            <el-input v-model="addForm.IsOverdue"></el-input>
                        </el-form-item>
                    </el-col>
                     <el-col :span="12">
                         <el-form-item label="教练名称" prop="TeacherName">
                            <el-input v-model="addForm.TeacherName"></el-input>
                        </el-form-item>
                    </el-col>
                     <el-col :span="12">
                         <el-form-item label="教练ID" prop="TeacherId">
                            <el-input v-model="addForm.TeacherId"></el-input>
                        </el-form-item>
                    </el-col>
                     <el-col :span="12">
                        <el-form-item label="身份证" prop="IdCard">
                            <el-input v-model="addForm.IdCard"></el-input>
                        </el-form-item>
                    </el-col>
                     <el-col :span="12">
                         <el-form-item label="出生日期" prop="Birthday">
                            <el-input v-model="addForm.Birthday"></el-input>
                        </el-form-item>
                    </el-col>
                     <el-col :span="12">
                        <el-form-item label="年龄" prop="age">
                            <el-input v-model="addForm.age"></el-input>
                        </el-form-item>
                    </el-col>
                     <el-col :span="12">
                        <el-form-item label="性别" prop="sex">
                            <el-input v-model="addForm.sex"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    <el-dialog title="修改会员信息" :visible.sync="editDialogVisible" width="50%">
                <el-form :model="editForm"  label-width="90px" >
                    <el-row :gutter="10">
                        <el-col :span="12">
                            <el-form-item label="卡号" prop="CardNumber">
                                <el-input v-model="editForm.CardNumber"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="办理费用" prop="DealCost">
                                <el-input v-model="editForm.DealCost"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="剩余次数" prop="RemainTime">
                                <el-input v-model="editForm.RemainTime"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="剩余天数" prop="RemainDay">
                                <el-input v-model="editForm.RemainDay"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="是否过期" prop="IsOverdue">
                                <el-input v-model="editForm.IsOverdue"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="教练名称" prop="TeacherName">
                                <el-input v-model="editForm.TeacherName"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="教练ID" prop="TeacherId">
                                <el-input v-model="editForm.TeacherId"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="身份证" prop="IdCard">
                                <el-input v-model="editForm.IdCard"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="出生日期" prop="Birthday">
                                <el-input v-model="editForm.Birthday"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="年龄" prop="age">
                                <el-input v-model="editForm.age"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="性别" prop="sex">
                                <el-input v-model="editForm.sex"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                </span>
            </el-dialog>
    </div>
</template>

<script>
    import TableComponent from '../../public/TableComponent.vue'
    import memberDatas from '../../js/members.js'
    export default {
        name: 'members',
        components: {TableComponent},
        data() {
            return {
                memberDatas: memberDatas,
                dialogVisible: false,
                editDialogVisible:false,
                addForm:{
                    id: 1,
                    CardNumber: '',
                    DealCost: 1000,
                    RemainTime:0,
                    RemainDay:0,
                    IsOverdue:'',
                    TeacherId:'',
                    TeacherName:'',
                    IdCard:'',
                    Birthday:'',
                    sex:'',
                    age:''

                },
                editForm:{}
            }
        },
        methods: {
            createNew () {
                this.dialogVisible=true
            },
            updateNew(){
                this.editDialogVisible=true
            },
            
        }
    }
</script>

<style>
</style>
