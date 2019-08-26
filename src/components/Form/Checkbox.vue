<template>
<div>
  <h1>多选框checkbox</h1>
  <h2>基础用法</h2>
  <!-- 单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍 -->
  <el-checkbox v-model="checked">备选项1</el-checkbox>
  <el-checkbox v-model="checked" disabled>备选项2</el-checkbox>
  <h2>多选框组</h2>
  <!-- el-checkbox-group元素能把多个 checkbox 管理为一组，只需要在 Group 中使用v-model绑定Array类型的变量即可 -->
  <!-- el-checkbox 的 label属性是该 checkbox 对应的值，若该标签中无内容，则该属性也充当 checkbox 按钮后的介绍。 -->
  <!-- label与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。 -->
  <el-checkbox-group v-model="dataList">
      <el-checkbox label="复选框A"></el-checkbox>
      <el-checkbox label="复选框B"></el-checkbox>
      <el-checkbox label="复选框C"></el-checkbox>
      <el-checkbox label="选中且禁用" disabled></el-checkbox>
  </el-checkbox-group>
  <h2>indeterminate 状态</h2>
  <!-- indeterminate 属性用以表示 checkbox 的不确定状态，一般用于实现半选的效果 -->
    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
     <div style="margin: 15px 0;"></div>
     <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange" >
         <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
     </el-checkbox-group>

    <h2>min max 可以设置最多 最少 能勾选几个</h2>

    <h2>按钮多选</h2>
    <!-- 只需要把el-checkbox元素替换为el-checkbox-button元素即可 -->

</div>

</template>

<script>
const cityOptions = ['上海', '北京', '广州', '深圳'];
export default {
    data(){
        return {
            checked: true,
            checkAll: false,
            dataList: ['选中且禁用','复选框A'],
            checkedCities: ['上海', '北京'],
            cities: cityOptions,
            isIndeterminate: true
        }
    },
    methods:{
        handleCheckAllChange(val){
            this.checkedCities = val ? cityOptions : []
            this.isIndeterminate = false
        },
        handleCheckedCitiesChange(val) {
            let checkCount = val.length
            this.checkAll = checkCount === this.cities.length;
            this.isIndeterminate = checkCount > 0 &&  checkCount < this.cities.length
        }
    }
}
</script>

<style>

</style>  