<template>
    <div>
        <table-component :tableData="EmployeeDatas.datas" :colData="EmployeeDatas.cols" @create="createNew" @update="updateNew"></table-component>
        <el-dialog title="新增员工信息" :visible.sync="dialogVisible" width="50%">
            <el-form :model="addForm"  label-width="90px" >
                <el-row :gutter="10">
                    <el-col :span="12">
                          <el-form-item label="员工ID" prop="id">
                            <el-input v-model="addForm.id"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                         <el-form-item label="员工编号" prop="EmployeeCode">
                            <el-input v-model="addForm.EmployeeCode"></el-input>
                        </el-form-item>
                    </el-col>
                     <el-col :span="12">
                        <el-form-item label="员工姓名" prop="EmployeeName">
                            <el-input v-model="addForm.EmployeeName"></el-input>
                        </el-form-item>
                    </el-col>
                     <el-col :span="12">
                         <el-form-item label="职位" prop="Job">
                            <el-input v-model="addForm.Job"></el-input>
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
    <el-dialog title="修改员工信息" :visible.sync="editDialogVisible" width="50%">
                <el-form :model="editForm"  label-width="90px" >
                     <el-row :gutter="10">
                    <el-col :span="12">
                          <el-form-item label="员工ID" prop="id">
                            <el-input v-model="editForm.id"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                         <el-form-item label="员工编号" prop="EmployeeCode">
                            <el-input v-model="editForm.EmployeeCode"></el-input>
                        </el-form-item>
                    </el-col>
                     <el-col :span="12">
                        <el-form-item label="员工姓名" prop="EmployeeName">
                            <el-input v-model="editForm.EmployeeName"></el-input>
                        </el-form-item>
                    </el-col>
                     <el-col :span="12">
                         <el-form-item label="职位" prop="Job">
                            <el-input v-model="editForm.Job"></el-input>
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
    import EmployeeDatas from '../../js/Employee'
    export default {
        name: 'members',
        components: {TableComponent},
        data() {
            return {
                EmployeeDatas: EmployeeDatas,
                dialogVisible: false,
                editDialogVisible:false,
                addForm:{
                    id: 1,
                    EmployeeCode:'',
                    EmployeeName:'',
                    Job:'',
                    IdCard:'',
                    Birthday:'',
                    sex:1,
                    age:1

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
