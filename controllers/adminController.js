const User = require('../models/User');
const Task = require('../models/Task');
const XLSX = require('xlsx');


const home=async(req,res)=>{
     
    res.render('home')
}
const user=async(req,res)=>{
     
    
    res.render('user')
}

const task=async(req,res)=>{
          const data=await User.query()
     console.log(data)

    res.render('task',{data:data})
}
const createUser = async (req, res) => {
  try {
    const{id,name,email}=req.body
    console.log(req.body)
    const user = await User.query().insert({
      id,
      name,
      email
    });
    res.render('user');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



const assignTask = async (req, res) => {
  try {
    const{title,description,user_id}=req.body
    console.log(req.body)
    const task = await Task.query().insert({
      title,
       description,
      user_id
    });
    res.render('user');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



const download = async (req, res) => {
  const tasks = await Task.query().withGraphFetched('user');
console.log(tasks)
  const data = tasks.map(task => ({
    TaskTitle: task.title,
    Description: task.description,
    userName: task.user?.name,     
    Email: task.user?.email
  }));
  console.log(data)

  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'task');

  const buffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });
  res.setHeader('Content-Disposition', 'attachment; filename="tasks.xlsx"');
  res.type('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  res.send(buffer);
};



module.exports={
    home,
    user,
    task,
    createUser,
    assignTask,
    download
}


