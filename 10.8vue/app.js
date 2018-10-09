let list = [
  {
    title:"我想这周把vue学会",
    isCompleted:false,
    isEdit:false,
  },
  {
    title:"我想去嵩山少林寺学武",
    isCompleted:true,
    isEdit:false,
  }
]
var app = new Vue({
  el:"#todolist",
  data:{
    //添加文本框的数据
    addInp:"",
    listItems:[]
  },
  methods:{
    //添加列表
    add:function(){
      this.listItems.push({title:this.addInp,isCompleted:false,isEdit:false});
      this.addInp = "";
    },
    //删除列表
    del:function(index){
      this.listItems.splice(index,1);
    },
    reEdit:function(item){
      item.isEdit = !item.isEdit
    },
    reAdd:function(item){
      item.isEdit = false
    }
  }
})
