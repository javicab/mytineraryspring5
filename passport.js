const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
var GoogleStrategy = require('passport-google-oauth20').Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
//const mongoose = require("mongoose");
//const User = mongoose.model("user");
const Usuario = require('./modeloUser');
const key = require("./config");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey= key.secretOrKey;
console.log("passport")

function extractProfile (profile) {
  let imageUrl = '';
  if (profile.photos && profile.photos.length) {
    imageUrl = profile.photos[0].value;
  }
  return {
    id: profile.id,
    displayName: profile.displayName,
    image: imageUrl
  };
}


module.exports = passport.use(
  new JwtStrategy(opts, (jwt_payload, done) => {
    console.log("payload",jwt_payload)
      Usuario.findOne({email: jwt_payload.email})
      .then(user => {
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      })
      .catch(err => console.log(err));
  })
);

//Google Strategy

const GOOGLE_CLIENT_ID = key.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = key.GOOGLE_CLIENT_SECRET

module.exports = passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/redirect",
    accessType: 'offline'
  },
  //second param: cb function
  function(accessToken, refreshToken, profile, done) {
    done(null, extractProfile(profile));
    // query if user already exists
    Usuario.findOne({email: profile.id})
    
    .then((currentUser) => {
        if (currentUser) {
          return done (null, currentUser); // already have this user, done
        } else { 
          //it doesn't exist, create it first, then done.
            new Usuario({
                userName: profile.displayName,
                password: "",
                profilePic: profile.photos[0].value,
                email: profile.id,
                active: "1"
            })
            .save()
            .then((newUser) => {
                done(null, newUser)
              }
            );
        }
    })
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  Usuario.findOne({email: id}).then((user) => {
      done(null, user);
  });
});
