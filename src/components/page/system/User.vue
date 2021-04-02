<template>
    <div>
        <table-component :tableData="UserDatas.datas" :colData="UserDatas.cols" @create="createNew" @update="updateNew"></table-component>
        <el-dialog title="新增员工信息" :visible.sync="dialogVisible" width="50%">
            <el-form :model="addForm"  label-width="90px" >
                <el-row :gutter="10">
                    <el-col :span="12">
                          <el-form-item label="用户ID" prop="id">
                            <el-input v-model="addForm.id"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                         <el-form-item label="会员ID" prop="MemberId">
                            <el-input v-model="addForm.MemberId"></el-input>
                        </el-form-item>
                    </el-col>
                     <el-col :span="12">
                        <el-form-item label="用户账户" prop="Account">
                            <el-input v-model="addForm.Account"></el-input>
                        </el-form-item>
                    </el-col>
                     <el-col :span="12">
                         <el-form-item label="用户密码" prop="Password">
                            <el-input v-model="addForm.Password"></el-input>
                        </el-form-item>
                    </el-col>
                     <el-col :span="12">
                        <el-form-item label="用户名" prop="UserName">
                            <el-input v-model="addForm.UserName"></el-input>
                        </el-form-item>
                    </el-col>
                     <el-col :span="12">
                         <el-form-item label="电话" prop="Phone">
                            <el-input v-model="addForm.Phone"></el-input>
                        </el-form-item>
                    </el-col>
                     <el-col :span="12">
                         <el-form-item label="邮箱" prop="Email">
                            <el-input v-model="addForm.Email"></el-input>
                        </el-form-item>
                    </el-col>
                     <el-col :span="12">
                        <el-form-item label="备注" prop="Remark">
                            <el-input v-model="addForm.Remarkd"></el-input>
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
                          <el-form-item label="用户ID" prop="id">
                            <el-input v-model="editForm.id"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                         <el-form-item label="会员ID" prop="MemberId">
                            <el-input v-model="editForm.MemberId"></el-input>
                        </el-form-item>
                    </el-col>
                     <el-col :span="12">
                        <el-form-item label="用户账户" prop="Account">
                            <el-input v-model="editForm.Account"></el-input>
                        </el-form-item>
                    </el-col>
                     <el-col :span="12">
                         <el-form-item label="用户密码" prop="Password">
                            <el-input v-model="editForm.Password"></el-input>
                        </el-form-item>
                    </el-col>
                     <el-col :span="12">
                        <el-form-item label="用户名" prop="UserName">
                            <el-input v-model="editForm.UserName"></el-input>
                        </el-form-item>
                    </el-col>
                     <el-col :span="12">
                         <el-form-item label="电话" prop="Phone">
                            <el-input v-model="editForm.Phone"></el-input>
                        </el-form-item>
                    </el-col>
                     <el-col :span="12">
                         <el-form-item label="邮箱" prop="Email">
                            <el-input v-model="editForm.Email"></el-input>
                        </el-form-item>
                    </el-col>
                     <el-col :span="12">
                        <el-form-item label="备注" prop="Remark">
                            <el-input v-model="editForm.Remarkd"></el-input>
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
    import UserDatas from '../../js/user'
    export default {
        name: 'members',
        components: {TableComponent},
        data() {
            return {
                UserDatas: UserDatas,
                dialogVisible: false,
                editDialogVisible:false,
                addForm:{
                    id: 1,
                    MemberId:'',
                    Account:'',
                    Password:'',
                    UserName:'',
                    Phone:'',
                    Email:'',
                    Remark:''
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
