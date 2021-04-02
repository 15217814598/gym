<template>
    <div>
        <table-component :tableData="EquipmentDatas.datas" :colData="EquipmentDatas.cols" @create="createNew" @update="updateNew"></table-component>
        <el-dialog title="新增器材信息" :visible.sync="dialogVisible" width="50%">
            <el-form :model="addForm"  label-width="90px" >           
                          <el-form-item label="器材编号" prop="id">
                            <el-input v-model="addForm.id"></el-input>
                        </el-form-item>                                    
                         <el-form-item label="器材名称" prop="EmployeeName">
                            <el-input v-model="addForm.EmployeeName"></el-input>
                        </el-form-item>                   
                        <el-form-item label="是否维修" prop="IsRepair">
                            <el-input v-model="addForm.IsRepair"></el-input>
                        </el-form-item>                                     
                         <el-form-item label="维修原因" prop="RepairReason">
                            <el-input v-model="addForm.RepairReason"></el-input>
                        </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    <el-dialog title="修改器材信息" :visible.sync="editDialogVisible" width="50%">
                <el-form :model="editForm"  label-width="90px" >                   
                        <el-form-item label="器材编号" prop="id">
                            <el-input v-model="editForm.id" disabled></el-input>
                        </el-form-item>                                    
                         <el-form-item label="器材名称" prop="EmployeeName">
                            <el-input v-model="editForm.EmployeeName"></el-input>
                        </el-form-item>                   
                        <el-form-item label="是否维修" prop="IsRepair">
                            <el-input v-model="editForm.IsRepair"></el-input>
                        </el-form-item>                                     
                         <el-form-item label="维修原因" prop="RepairReason">
                            <el-input v-model="editForm.RepairReason"></el-input>
                        </el-form-item>                         
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
    import EquipmentDatas from '../../js/Equipment'
    export default {
        name: 'members',
        components: {TableComponent},
        data() {
            return {
                EquipmentDatas: EquipmentDatas,
                dialogVisible: false,
                editDialogVisible:false,
                addForm:{
                        id: 0,
                        EmployeeName:'',
                        IsRepair:'',
                        RepairReason:''

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
