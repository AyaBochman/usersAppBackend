const usersModel = require("../models/users-model")


class UsersController{
    static getUsers(params = {}, select = {}, options = {}) {
        return new Promise((resolve, reject) => {
            usersModel.find(params, select, options, (err, results) => {
            if (err) reject(err);
            resolve(results);
          });
        });
  
    }

    // static delAccount(id) {
    //     return new Promise((resolve, reject) => {
    //       accountModel.findByIdAndDelete(id, (err, result) => {
    //         if (err) reject(err);
    //         else if (result != null) {
    //           resolve(`Account ${result._id} deleted`);
    //         } else {
    //           resolve(`Account ${id} Not Exist`);
    //         }
    //       });
    //     });
    //   }
    
    //   static updateAccount(objectInput) {
    //     console.log(objectInput);
    //     let amount = objectInput.operation == "deposit" ? parseInt(objectInput.amount): "-" + parseInt(objectInput.amount) 
    //     let audit = {
    //       operation: objectInput.operation,
    //       date: new Date(),
    //       amount: objectInput.amount,
    //       operationId: objectInput.operation + Math.round((Math.random()*10000))
    //     }
    //     let query = {
    //       createdDate: new Date(),
    //         $inc: { balance: amount },
    //         $push: {operations: audit}
    //     };

    //     console.log("query")
    //     console.log(query)
    //     return new Promise((resolve, reject) => {
    //       accountModel.findOneAndUpdate(
    //         { _id: objectInput.accountId }, 
    //         query,
    //         { new: true },
            
    //         (err, result) => {
    //           if (err) reject(err);
    //           else if (result != null) {
    //               console.log("updated result")
    //             console.log(result);
    //             resolve(result);
    //           } else {
    //             resolve(`Account ${id} Not Exist`);
    //           }
    //         }
    //       );
    //     });
    //   }
}


module.exports = UsersController;