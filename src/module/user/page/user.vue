<template>

  <div class="user">
    <div class="selector">
          <el-button type="primary" @click.native="dialogVisible=true">添加新的管理者</el-button>
    </div>

     <el-table
      :data="tableData"
      style="width: 100%"
      :header-cell-style="{'text-align':'center'}"
      v-loading="loading"
      >
      <el-table-column
        prop="date"
        label="日期"
        style="text-align:center"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
          <template slot-scope="scope">
        <el-tag
          :type="scope.row.tag === '家' ? 'primary' : 'success'"
          close-transition>{{scope.row.tag}}</el-tag>
      </template>
      </el-table-column>
    </el-table>
    <el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%">
  <el-form label-width="80px">
    <el-form-item label="姓名">
      <el-input v-model="formdata.name"></el-input>
    </el-form-item>
    <el-form-item label="地址">
      <el-input v-model="formdata.address"></el-input>
    </el-form-item>
    {{formdata.date}}
    <el-form-item label="日期">
      <el-date-picker type="date" v-model="formdata.date" style="width:100%"></el-date-picker>
    </el-form-item>
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="submit();dialogVisible=false">确 定</el-button>
  </span>
</el-dialog>

  </div>
</template>

<script>
export default {
  name: 'user',
  data: () => {
    return {
      loading: false,
      formdata: {
        name: '',
        address: '',
        date: ''
      },
      dialogVisible: true,
      tableData: [
        {
          name: '老李',
          date: '2017/10/10',
          address: '佛山禅城区'
        },
        {
          name: '老李',
          date: '2017/10/10',
          address: '佛山禅城区'
        },
        {
          name: '老李',
          date: '2017/10/10',
          address: '佛山禅城区'
        }
      ]
    }
  },
  methods: {
    add () {},
    submit () {
      // this.$http.get('')
      const options = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencode'
        },
        emulateJSON: true
      }
      this.formdata.date = Date.parse(this.formdata.date)
      console.log(this.formdata)
      this.$http.post('http://localhost:8081', this.formdata, options).then(res => {
        console.log(res)
        this.init()
      })
    },
    init () {
      this.loading = true
      const options = {
        url: 'http://localhost:8081?c=getuserlist',
        methods: 'GET'
      }
      this.$http(options).then(res => {
        const userlist = res.data.data
        this.loading = false
        userlist.map(item => {
          item.date = new Date(parseInt(item.date)).toLocaleDateString()
          return item
        })
        console.log(userlist)
        this.tableData = userlist
      })
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style lang="less">
.user {
  .el-form-item__label {
    text-align: center !important;
  }
  .selector {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
