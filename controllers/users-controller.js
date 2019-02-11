const usersModel = require("../models/users-model")


class UsersController {
    static getUsers(params = {}, select = {}, options = {}) {
        return new Promise((resolve, reject) => {
            usersModel.find(params, select, options, (err, results) => {
                if (err) reject(err);
                resolve(results);
            });
        });

    }


    static delUser(id) {
        return new Promise((resolve, reject) => {
            usersModel.findOneAndDelete({ userId: id }, (err, result) => {
                if (err) reject(err);
                else if (result != null) {
                    resolve(result.userId);
                } else {
                    resolve(`User ${userId} Not Exist`);
                }
            });
        });
    }

    static addUser(newUser) {
        return new Promise((resolve, reject) => {
      
       let model = new usersModel( {
            userId: newUser.userId, name: newUser.name, balance: newUser.balance,
            gender: newUser.gender
        })
          
            model.save((err, result) => {
                if (err) reject(err);
                else {
                    resolve(result);
                }
            });
        });
    }



      static updateUser(updatedUser) {
          console.log("inside controller")
          let newUser = updatedUser.updatedUser.updatedUser;
        console.log(newUser._id);
        let query = {
            userId: newUser.userId,
            name: newUser.name,
            balance: newUser.balance,
            gender: newUser.gender
        }
        return new Promise((resolve, reject) => {
            usersModel.findOneAndUpdate(
              { _id: newUser._id }, 
              query,
            {new: true},
              (err, result) => {
                if (err) reject(err);
                else if (result != null) {
                    console.log("updated result")
                  console.log(result);
                  resolve(result);
                } else {
                  reject(`Account Not Exist`);
                }
              }
            );
          });
        // let amount = objectInput.operation == "deposit" ? parseInt(objectInput.amount): "-" + parseInt(objectInput.amount) 
        // let audit = {
        //   operation: objectInput.operation,
        //   date: new Date(),
        //   amount: objectInput.amount,
        //   operationId: objectInput.operation + Math.round((Math.random()*10000))
        // }
        // let query = {
        //   createdDate: new Date(),
        //     $inc: { balance: amount },
        //     $push: {operations: audit}
        // };

        // console.log("query")
        // console.log(query)
  
      }
}


module.exports = UsersController;