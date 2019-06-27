<template>
  <div class="app-container">
    <el-table :data="tableData" style="width: 100%; " max-height="400"  border >
      <el-table-column prop="id" label="工单id" ></el-table-column>
      <el-table-column prop="demand" width="300" style="text-align:justify" label="要求说明" ></el-table-column>
      <el-table-column prop="province" label="状态" ></el-table-column>
      <el-table-column prop="createrName" label="创建人" ></el-table-column>
      <el-table-column prop="createTime" label="创建时间" ></el-table-column>
      <el-table-column fixed="right" label="操作" width="60">
        <template slot-scope="scope">
          <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">添加附件</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      tableData: []
    }
  },
  created() {
    axios.post('/plotAndDesign/plotAndDesignList/true',
      'page=1&limit=10&timestamp=1561537854406'
    ).then( (data) => {
      this.tableData = data.data.data
      console.log(this.tableData)
    })
  },
  
};
</script>
