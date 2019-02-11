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
router.get("/", async (req, res) => {
  try {
    console.log("getting users");
    const users = await UsersController.getUsers(
      {},
      { __v: 0 },
      {}
    );
    res.json(users);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
}
);



router.get("/:id", async (req, res, next) => {
  console.log(req.params.id)
  let theId = req.params.id;
  try {
    let theUser = await UsersController.getUsers({ userId: theId }, { __v: 0 })
    res.json(theUser)
  } catch (ex) {
    res.status(409).send({ message: ex })
  }
}
)

//delete
router.delete("/:id", async (req, res, next) => {
  try {
    const results = await UsersController.delUser(req.params.id);
    res.json(results);
  } catch (ex) {
    res
      .status(409)
      .json({ message: "there is a conflict with my understanding", real: ex });
  }
});

//add
router.post("/add-user", async (req, res, next) => {
  // logger.debug("create account");
  console.log("inside add user")
  console.log(req.body.newuser)
  try {
    let result = await UsersController.addUser(req.body.newuser)
    res.json(result);
  } catch (ex) {
    res
    .status(409)
    .json({ message: "there is a conflict with my understanding", real: ex });
  }

});

router.put("/update-user", async (req, res, next) => {
  // console.log("this is the body")
  // console.log(req.body)
  try {
    const results = await UsersController.updateUser(req.body);
    res.json(results);
  } catch (ex) {
    res
      .status(409)
      .json({ message: "there is a conflict with my understanding", real: ex });
  }
});



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









// })




// //new



module.exports = router;
