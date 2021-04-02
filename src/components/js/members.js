let cols = [
    {
        prop: 'id',
        label: '会员Id',
        id: 1
    },
    {
        prop: 'userId',
        label: '用户Id',
        id: 2
    },
    {
        prop: 'memberCard',
        label: '会员卡号',
        id: 3
    },
    {
        prop: 'cost',
        label: '办理费用',
        id: 4
    },
    {
        prop: 'remainingTimes',
        label: '剩余次数',
        id: 5
    },
    {
        prop: 'remainingDays',
        label: '剩余天数',
        id: 6
    },
    {
        prop: 'overdue',
        label: '是否过期',
        id: 7
    },
    {
        prop: 'coach',
        label: '教练名称',
        id: 8
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
            userId: 1,
            memberCard: 66667777,
            cost: 1000,
            remainingTimes: '-',
            remainingDays: '-',
            overdue: '否',
            coach: 'D',
            IdCard:'123',
            Birthday:'123',
            sex:1,
            age:1
        },
    ]
};
let memberDatas = {
    "pageName": "members",
    "cols": cols,
    "datas": datas
}
export default memberDatas;
