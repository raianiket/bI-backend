const express = require('express')
const mongoose = require('mongoose')

const Task = require('../models/app');


// exports.getTask = (req , res,next)=> {
//     task.find(function(err, listTasks){
//       if (!err) {
//         console.log(listTasks);
//         res.send({listTasks});
//       } else {
//         res.send(err);
//       }
//     });
//   }
exports.getT=(async(req,res) => {
    try{
           const listTasks = await Task.find()
           res.json(listTasks)
    }catch(err){
        res.send('Error ' + err)
    }
});

exports.postT = (req , res, next) => {
  console.log(req.body.name);
    const addNewTask = new Task ({
      name : req.body.name,
      description : req.body.description,
      creator : req.body.creator,
      duration: req.body.duration
    });
    addNewTask.save(function (err, data) {
  console.log(data);
      if (!err){
        res.send("Successfully added a new task on Database!!!");
        // console.log(data);
        let ends = setTimeout(function(){
          // console.log("Hello Fetching!!!");
          task.findOneAndDelete({_id: data._id}, function(err){})
          // console.log({ends});
          clearTimeout(ends);
  
        }, Number(req.body.duration)*(60000))
      }

    });
  };

// exports.postT=(async(req,res) => {
//     const work = new Task({
//         name: req.body.name,
//         description: req.body.description,
//         creator: req.body.creator,
//         duration: req.body.duration,
//         createdAt: req.body.createdAt
//     })

//     try{
//         const done =  await work.save() 
//         res.json(done)
//     }catch(err){
//         res.send('Error')
//     }
// });