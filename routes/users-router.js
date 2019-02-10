const express = require("express");
const router = express.Router();
// const data = require("../model/data");
// const logger = require("../logger/logger");
// const accountModel = require('../model/accounts-model')
const UsersController = require("../controllers/users-controller")
// const CookiesController = require("../controllers/cookiesController")

const fs = require("fs");

// router.use((req, res, next) => {
// //   logger.debug("middle accounts");
//   next();
// });



// router.get("/users", async (req,res,next) => {
//     console.log("imhere")
//   try{
//     let data = await UsersController.getUsers();
//     res.json(data);
//   }catch(ex){
//     res.status(409).send({message: ex})
//   }

// })
router.get(
  "/",
  async (req, res) => {

    try {
      console.log("getting users");
      const users = await UsersController.getUsers(
        {},
        { __v: 0 },
        {
          
        }
      );
      console.log("USERS: ", users);
      res.json(users);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }
);

// router.get("/:skip/:take/:sortby", async(req, res, next) => {
//   console.log("trasfered cookie", req.cookieData);
 
//   console.log(CookiesController)
//   try{
//     if (req.params.sort != "undefined") {
//       await CookiesController.updateCookie(req.cookies.preferences, {
//         sort: req.params.sort
//       });
//     }

//     let documentCookie = await CookiesController.getCookie(
//       req.cookies.preferences
//     );
//     let sortOptions = "balance";
//     if (documentCookie) {
//       sortOptions = documentCookie.sort;
//     }

//     const results = await accountController.getAccounts(
//       {},
//       { __v: 0 },
//       {
//         sort: "-" + sortOptions,
//         skip: parseInt(req.params.skip),
//         limit: parseInt(req.params.take)
//       }
//     );
//     res.json(results);
//   }catch(ex){
//     res.status(409).send({message: ex})
//   }

// });




// router.get("/:id",async(req,res,next) => {

//   let theId = req.params.id;
//   try{
// let theAcc = await accountController.getAccounts({_id:theId},{__v:0})
// res.json(theAcc)
//   }catch(ex){
//     res.status(409).send({message: ex})
//   }




// })


// router.post("/", (req, res, next) => {
//   logger.debug("create account");
//   try {
//     data.push(req.body);
//     res.json({ message: `account ${req.body.id} added`, result: true });
//   } catch (ex) {
//     res.status(500).json({ message: ex, result: false });
//   }
// });

// //new
// router.delete("/:id", async (req, res, next) => {
//   try {
//     const results = await accountController.delAccount(req.params.id);
//     res.json({ message: results });
//   } catch (ex) {
//     res
//       .status(409)
//       .json({ message: "there is a conflict with my understanding", real: ex });
//   }
// });

// router.put("/", async (req, res, next) => {
//   try {
//     const results = await accountController.updateAccount(req.body);
//     res.json({ message: results });
//   } catch (ex) {
//     res
//       .status(409)
//       .json({ message: "there is a conflict with my understanding", real: ex });
//   }
// });

module.exports = router;
