const User = require('./connect.js');
//const Op = db.Sequelize.Op;

exports.createUser = (req, res) => {
    const user = new User(req.body);
    console.log(req.body);
    user
      .save()
      .then(() => {
        res.status(201).json({
          success: true,
          message: 'Le user a été enregistré avec succès',
          result: user,
        });
      })
      .catch((error) => {
        console.log(error);
        res.status(400).json({
          success: false,
          message: "Une erreur s'est produite",
          result: undefined,
          request: ""+ req.body
        });
      });
  };
  