<template>
  <div>
    <!-- 设置v-model绑定变量，选中意味着变量的值为相应 Radio label属性的值 -->
    <!-- label可以是String、Number或Boolean -->
    <el-radio v-model="radio" label="1">备选项1</el-radio>
    <el-radio v-model="radio" label="2">备选项2</el-radio>
    <el-radio v-model="radio" label="3" disabled>备选项2</el-radio>
    <h3>单选框组(多个互斥按钮)</h3>
    <el-radio-group v-model="radio">
      <el-radio label="1">备选项1</el-radio>
      <el-radio label="2">备选项2</el-radio>
      <el-radio label="3">备选项3</el-radio>
    </el-radio-group>
    <h3>单选按钮(el-radio-button)</h3>
    <div style="margin-top: 30px">
      <el-radio-group v-model="radio1">
        <el-radio-button label="北京">北京</el-radio-button>
        <el-radio-button label="上海">上海</el-radio-button>
        <el-radio-button label="广州">广州</el-radio-button>
      </el-radio-group>
    </div>

    <div style="margin-top: 30px">
      <el-radio-group v-model="radio2" size="small" text-color="#fff" fill="#41b883">
        <el-radio-button label="北京">北京</el-radio-button>
        <el-radio-button label="上海">上海</el-radio-button>
        <el-radio-button label="广州">广州</el-radio-button>
      </el-radio-group>
    </div>
    <div style="margin-top: 30px">
      <el-radio-group v-model="radio3" size="mini">
        <el-radio-button label="北京">北京</el-radio-button>
        <el-radio-button label="上海">上海</el-radio-button>
        <el-radio-button label="广州">广州</el-radio-button>
      </el-radio-group>
    </div>
    <div style="margin-top: 30px">
      <el-radio-group v-model="radio">
        <el-radio border label="1">备选项1</el-radio>
        <el-radio border label="2">备选项2</el-radio>
        <el-radio border disabled label="3">备选项3</el-radio>
      </el-radio-group>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: "1",
      radio1: "北京",
      radio2: "北京",
      radio3: "北京",
      radio4: "北京"
    };
  }
};
</script>
