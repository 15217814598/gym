<template>
    <div>
        <div class="person">
            <div class="icon-style"><span>{{time}}</span></div>
            <div class="icon-style"><i class="el-icon-user-solid"></i></div>
            <div class="icon-style"><i class="el-icon-lock"></i></div>
            <div class="icon-style"><i class="el-icon-switch-button"></i></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'nav-header',
    data() {
        return {
            time: "2000-01-01 星期一",
            timer: null
        }
    },
    mounted() {
        this.timer = setInterval(() => {
                this.getNowTime()
            }, 1000);
    },
    methods: {
        getNowTime() {
            let date = new Date();
            let day = date.getFullYear() + " 年 " + date.getMonth() + " 月 " + date.getDate() + " 日 " + this.getNowDay(date.getDay());
            // console.log(date.getDay());
            let now = date.toLocaleTimeString();
            this.time = day + " " + now;
        },
        getNowDay(day) {
            switch (day) {
                case 2:
                    return "星期一"
                    break;
                case 3:
                    return "星期二"
                    break;
                case 4:
                    return "星期三"
                    break;
                case 5:
                    return "星期四"
                    break;
                case 6:
                    return "星期五"
                    break;
                case 0:
                    return "星期六"
                    break;
                case 1:
                    return "星期日"
                    break;
            }
        }
    }
}
</script>

<style scoped>
.person {
    text-align: right;
}
.icon-style {
    padding: 10px;
    width: 60px;
    height: 60px;
    display: inline;
}
</style>
