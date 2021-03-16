let menus = [
    {
        index: '1',
        icon: 'el-icon-s-custom',
        title: '系统模块',
        path: '/system',
        items: [
            {title: '会员管理', path: '/system/Members'},
            {title: '用户管理', path: '/system/Depart'},
            {title: '角色管理', path: '/system/Employee'},
        ]
    },
    {
        index: '2',
        icon: 'el-icon-s-custom',
        title: '器材模块',
        path: '/schedule',
        items: [
            {title: '器材管理', path: '/schedule/MySchedule'},
        ]
    },

]

export default menus
