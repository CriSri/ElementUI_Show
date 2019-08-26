<template>
    <div>
<!-- 
Input 为受控组件，它总会显示 Vue 绑定值。

通常情况下，应当处理 input 事件，并更新组件的绑定值（或使用v-model）。否则，输入框内显示的值将不会改变。

不支持 v-model 修饰符。 
-->      
        <h1>input输入框</h1>
        <div style="margin: 20px 0"></div>
        <el-input v-model="input1" placeholder="请输入内容"></el-input>
        <div style="margin: 20px 0"></div>
        <span style="marginRight: 10px">(可禁用)</span><el-input placeholder="请输入内容" v-model="input2" :disabled="true"></el-input>
        <div style="margin: 20px 0"></div>
        <span style="marginRight: 10px">(可清空)</span><el-input placeholder="请输入内容" v-model="input3" clearable></el-input>
        <div style="margin: 20px 0"></div>
        <span style="marginRight: 10px">(密码框)</span><el-input placeholder="请输入密码" v-model="input4" show-password></el-input>
    </div>
</template>

<script>
export default {
    data(){
        return {
            input1: '',
            input2: '',
            input3: '',
            input4: ''
        }
    }
}
</script>

<style>
    .el-input {
        width: 200px;
    }
</style>