<template>
  <div id="table">
    <h2>基础表格</h2>
    <!-- 注入 data属性  (对象数组)  再由prop 对应 对象的键名 即可填入数据-->
    <!-- label 属性 可以声明列名 -->
    <!-- width属性 定义列宽  -->
    <el-table :data="tableData" stripe border style="width: 541px">
      <!-- stripe 定义斑马纹 -->
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="名字" width="180"></el-table-column>
      <el-table-column prop="address" label="地址" width="180"></el-table-column>
    </el-table>

    <!-- 设置 排序 和 筛选 -->
    <!--  在列中设置filtersfilter-method属性即可开启该列的筛选  -->
    <!-- filters 是一个数组，filter-method是一个方法，它用于决定某些数据是否显示，会传入三个参数：value, row 和 column。 -->
    <el-table
      :data="tableData"
      stripe
      border
      style="width: 541px"
      :row-class-name="tableRowClassName"
      :default-sort="{prop: 'date', order: 'descending'}"
    >
      <!-- stripe 定义斑马纹 -->
      <el-table-column
        prop="date"
        label="日期"
        width="180"
        sortable
        :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
        :filter-method="filterHandler"
      ></el-table-column>
      <el-table-column prop="name" label="名字" width="180" sortable></el-table-column>
      <el-table-column prop="address" label="地址" width="180" sortable></el-table-column>
    </el-table>
  </div>
</template>
<style scoped>
.el-table .warning-row {
  background-color: oldlace;
}

.el-table .success-row {
  background-color: #dafdc7;
}
</style>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  methods: {
    tableRowClassName: function({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
    filterHandler: function(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    }
  }
};
</script>

