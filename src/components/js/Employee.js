let cols = [
    {
        prop: 'id',
        label: '员工ID',
        id: 1
    },
    {
        prop: 'EmployeeCode',
        label: '员工编号',
        id: 2
    },
    {
        prop: 'EmployeeName',
        label: '员工姓名',
        id: 3
    },
    {
        prop: 'Job',
        label: '职位',
        id: 4
    },
    {
        prop: 'IdCard',
        label: '身份证',
        id: 8
    },
    {
        prop: 'Birthday',
        label: '出生日期',
        id: 8
    },
    {
        prop: 'age',
        label: '年龄',
        id: 8
    },
    {
        prop: 'sex',
        label: '性别',
        id: 8
    },
    
];
let datas = {
    pageSize: 10,
    pageNum: 50,
    currentPage: 1,
    data: [
        {
            id: 1,
            EmployeeCode:'123',
            EmployeeName:'132',
            Job:'123',
            IdCard:'123',
            Birthday:'123',
            sex:1,
            age:1
        },
    ]
};
let EmployeeDatas = {
    "pageName": "Employee",
    "cols": cols,
    "datas": datas
}
export default EmployeeDatas;
