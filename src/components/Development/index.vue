<template>
    <div class="development">
        <h3>正在开发中。。。。</h3>
        <img src="../../../static/login/Development.gif" alt="正在开发......">
        <div>
            <Router-link to="/">返回首页</Router-link>
        </div>
    </div>
</template>

<style lang="scss">
    .development {
        text-align: center;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 244px;
        height: 290px;

        h3{
            font-size: 20px;
        }
        div{
            height: 50px;
            line-height: 50px;
        }
    }
</style>

