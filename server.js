const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ciudad = require('./modeloCity');
const itinerario = require('./modeloItinerary');
const actividad = require('./modeloActivity');
const Usuario = require('./modeloUser');

const fs = require ('fs');
//const routerImageProd = require('./images/products/images.product.route')

const bcrypt = require('bcryptjs');
const key = require("./config");
const jwt = require("jsonwebtoken");

var passport = require("./passport");

app.use(passport.initialize());
//app.use(passport.session());
/*

/*
// COR //todo: acotar a una url de excepcion para desarrollo, asi esta open to all
*/
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// MONGOOSE //TODO: ocultar la info de login
mongoose.set('bufferCommands', false);
mongoose.connect('mongodb+srv://jcaballero:Citibank1%23@jcluster0-ybzsi.gcp.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, dbName: 'jcaballero', useUnifiedTopology: true })
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => { console.log('Connection to the Atlas Cluster established !') });

app.use(bodyParser.urlencoded({ // Middleware
  extended: true
}));
app.use(bodyParser.json());

app.listen(port, () => console.log(`Server running on port ${port}`));

app.get("/images/users/:idUser?", (req, res) => {
  fs.readFile("./images/users/" + req.params.idUser,(err,data)=>{
    //console.log(req.params.idUser)
    if(err) return res.send().status(404)
    res.write(data)
    //res.end();
    return res.end();
  })
//res.send("Aca va air la imagen!del "+ req.params.idProd).status(200);
  }
  
);

app.get("/images/cities/:idCity?", (req, res) => {
  fs.readFile("./images/cities/" + req.params.idCity,(err,data)=>{
    //console.log(req.params.idUser)
    if(err) return res.send().status(404)
    res.write(data)
    //res.end();
    return res.end();
  })
//res.send("Aca va air la imagen!del "+ req.params.idProd).status(200);
  }
);
/*
app.get("/images/cities/:idCountry&:idCity", (req, res) => {
  fs.readFile("./images/cities/"+ req.params.idCountry + "/" + req.params.idCity,(err,data)=>{
    //console.log(req.params.idUser)
    if(err) return res.send().status(404)
    res.write(data)
    //res.end();
    return res.end();
  })
//res.send("Aca va air la imagen!del "+ req.params.idProd).status(200);
  }
);
*/
//jwt OK
app.post("/login",
  (req, res) => {
    const login = {
      email: req.body.email,
      password: req.body.password
  }
  console.log('login' ,login);
  if(res.status(200)){
    let userEmail = login.email;
    console.log("userEmail");
    console.log(userEmail);
    Usuario.findOne({ email: userEmail })
    .then( existe => {
        console.log('existe',existe)
        console.log('pass',login.password)
        bcrypt.compare(login.password, existe.password, (err,comparacion) => {
          if (err) {
            console.log('error en login', err)
          }
          if (!comparacion){
             console.log('passwords do not match', comparacion)
             res.status(403).json({success: false, message: 'passwords do not match'})
          } else {
            const payload = {
            username: existe.userName,
            profilePic: existe.profilePic,
            email: existe.email,
          }
          const options = {expiresIn: 600};
          jwt.sign(
            payload,
            key.secretOrKey,
            options,
            (err, token) => {
              if(err){
                res.json({
                  success: false,
                  token: "There was an error"
                });
              }else {
                //cookie?
                var newDate = new Date();
                var expDate = newDate.setSeconds(newDate.getSeconds() + 600)
                console.log('token: ', token, 'exp: ' , expDate)
                res.json({// redirect
                  success: true,
                  expira: expDate,
                  token: token
                });
              }
            }
          )//fin sign
        }//fin else bcrypt
      })//fin bcrypt
    })//fin then
    .catch( error => {
      console.log("Error authenticating user: ")
      console.log(error);
    });
  }
});

//test authenticate jwt OK
app.get("/auth",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Usuario.findOne({ email: req.body.email })
      .then(user => {
        res.json(user);
      })
      .catch(err => res.status(404).json({ error: "User does not exist!" }));
  }
);

// google auth
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }), 
  (req, res, next) => {console.log("res", res)}
  );

app.get('/auth/google/redirect', 
  passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res, next) => {
      // Successful authentication
      //res.redirect('/');
      console.log('req.user', req.user);
      const { userName,
         email,
         profilePic } = req.user;
      const payload = {
        userName: userName,
        email: email,
        profilePic: profilePic
      };

      const options = {expiresIn: 600};
      const token = jwt.sign(payload, key.secretOrKey, options);
      console.log('token posterior google: ', token);
      /*
      res.json({// redirect
        success: true,
        expira: expDate,
        token: token
        */
      res.redirect(`http://localhost:3000/user/userProfile/${token}`);  
      });
      
app.get("/test", (req, res) => {
  res.send('**TEST** Express - Spring2 Epic2 task 8 - HELLO WORLD')
});

app.get("/cities/all", (req, res) => {
  if(res.status(200)){
    ciudad.find(function (err, cities) {
      if (err) {
        return console.error(err);
      }
      
      console.log(cities);
      res.json(cities);
    });
  }
});

app.get("/cities/itineraries", (req, res) => {
  if(res.status(200)){
    itinerario.find(function (err, itineraries) {
      console.log('itineraries');
      if (err) {
        return console.error('error:' + err);
      }
      console.log('lectura desde DB OK')
      console.log(itineraries);
      res.json(itineraries);
    });
  }
});

app.get("/cities/activities", (req, res) => {
  if(res.status(200)){
    actividad.find(function (err, activities) {
      if (err) {
        return console.error(err);
      }
      console.log('activities');
      console.log(activities);
      res.json(activities);
    });
  }
});
   
app.get('/cities/itineraries/:id',
 (req, res) => {
  if(res.status(200)){
      //console.log(req, res)
      let cityIdRequested = req.params.id;
      //console.log("cityIdRequested");
      //console.log(cityIdRequested);
      itinerario.find({ cityId: cityIdRequested })
        .then(it => {
				  res.send(it)
			  })
			  .catch(err => console.log(err));
  }
});


// user profile posterior a google + jwt
app.get('/user/userProfile:id',
 (req, res) => {
  if(res.status(200)){
      //console.log(req, res)
      let token = req.params.id;
				  res.send(token)
	}
});


app.get('/cities/activities/:id',
 (req, res) => {
  if(res.status(200)){
      //console.log(req,res)
      let itineraryIdRequested = req.params.id;
      console.log("itineraryIdRequested");
      console.log(itineraryIdRequested);
      actividad.find({ itineraryId: itineraryIdRequested })
        .then(activity => {
				  res.send(activity)
			  })
			  .catch(err => console.log(err));
  }
});

//20191127 - clase - this is how you implement a city route by specific city
app.post('/cities/addCity/', (req, res) => {

  ciudad.findOne({name: req.body.name})
  .then(city => {
    if(city){
       let error = 'City Exists in Database.';
       return res.status(400).json(error);
    } else {   
        const newCity = new ciudad({
          name: req.body.name,
          country: req.body.country
        })
        console.log(newCity);

  // TODO agregar logica para no agregar duplicados
        newCity.save()
        .then(city => {
          res.json(city)
          })
        .catch(err => {
          console.log('log save city server -- ',err)
        res.status(400).json(err)}) 
    }
  });
});

app.post('/users/addUser/', (req, res) => {
     Usuario.findOne({email: req.body.email})
         .then(user => {
             if(user){
                let error = 'Email Address Exists in Database.';
                return res.status(400).json(error);
             } else {                
                  const newUser = new Usuario({
                    profilePic: req.body.profilePic,
                    email: req.body.email,
                    userName: req.body.userName,
                    password: req.body.password,
                    active: '1'
                });
            console.log(newUser);

            bcrypt.genSalt(10, (err, salt) => {
              if(err) throw err;
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                  if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                    .then(user => {
                      res.json(user) // devuelve el nuevo user con el nuevo ID creado
                    })
                    .catch(err => {
                      console.log('log save user server -- ',err)
                      res.status(400).json(err)
                    }) 
                });
             })
    }});
});

app.post('/cities/addItinerary/', (req, res) => {
  
  const newItinerary = new itinerario({
    title: req.body.title,
    rating: req.body.rating,
    duration: req.body.duration,
    price: req.body.price,
    hashtag: req.body.hashtag,
    cityId: req.body.cityId,
    userId: req.body.userId


  })
  console.log(newItinerary);

  // TODO validaciones
  newItinerary.save()
  .then(itinerary => {
    res.json(itinerary)
    })
  .catch(err => {
    console.log('log save comment to server -- ',err)
  res.status(400).json(err)}) 

});

app.post('/cities/addComment/', (req, res) => {
  
        const newComment = new comentario({
          comment: req.body.comment,
          date: req.body.date,
          userId: req.body.userId,
          itineraryId: req.body.itineraryId
        })
        console.log(newComment);

        // TODO validaciones
        newComment.save()
        .then(comment => {
          res.json(comment)
          })
        .catch(err => {
          console.log('log save comment to server -- ',err)
        res.status(400).json(err)}) 
    
  });

app.get('/cities/comments/:id',
  (req, res) => {
   if(res.status(200)){
       //console.log(req,res)
       let itineraryIdRequested = req.params.id;
       console.log("comments by itineraryIdRequested");
       console.log(itineraryIdRequested);
       comentario.find({ itineraryId: itineraryIdRequested })
         .then(comment => {
           res.send(comment)
         })
         .catch(err => console.log(err));
   }
 });