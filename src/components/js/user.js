let cols = [
    {
        prop: 'id',
        label: '用户Id',
        id: 1
    },
    {
        prop: 'MemberId',
        label: '会员Id',
        id: 2
    },
    {
        prop: 'Account',
        label: '用户账户',
        id: 3
    },
    {
        prop: 'Password',
        label: '用户密码',
        id: 4
    },
    {
        prop: 'UserName',
        label: '用户名',
        id: 5
    },
    {
        prop: 'Phone',
        label: '电话号码',
        id: 6
    },
    {
        prop: 'Email',
        label: '邮箱',
        id: 7
    },
    {
        prop: 'Remark',
        label: '备注',
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
            MemberId:'123',
            Account:'123',
            Password:'123',
            UserName:'123',
            Phone:'123',
            Email:'123',
            Remark:'123'
        },
    ]
};
let userDatas = {
    "pageName": "user",
    "cols": cols,
    "datas": datas
}
export default userDatas;

