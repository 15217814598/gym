let cols = [
    {
        prop: 'Id',
        label: '器材ID',
        id: 1
    },
    {
        prop: 'EmployeeName',
        label: '器材名称',
        id: 2
    },
    {
        prop: 'IsRepair',
        label: '是否维修',
        id: 3
    },
    {
        prop: 'RepairReason',
        label: '维修原因',
        id: 4
    },
];
let datas = {
    pageSize: 10,
    pageNum: 50,
    currentPage: 1,
    data: [
        {
            id: 1,
            EmployeeName:'123',
            IsRepair:'是',
            RepairReason:'123'
        },
    ]
};
let EquipmentDatas = {
    "pageName": "Equipment",
    "cols": cols,
    "datas": datas
}
export default EquipmentDatas;
