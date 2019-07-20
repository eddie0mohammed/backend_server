const passport = require('passport');
const User= require('../models/users');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

// create local strategy
const localOptions = {usernameField: 'email'};
const localLogin = new LocalStrategy(localOptions, function(email, password, done){
    //verify this email and password, call done with the user if it is the correct email & password
    //otherwise call done with false
    User.findOne({email: email}, function(err, user){
        if (err) { return done(err)};

        if (!user) {return done(null, false)};

        //compare passwords - is `password` equal to user.password?
        user.comparePassword(password, function(err, isMatch){
            if (err) { return done(err)};
            if (!isMatch) { return done(null, false)};

            return done(null, user);
        })
    })
})

//setup options for JWT Strategy
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret,
};


// create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){

    //see if the user ID in the payload exists in our database
    User.findById(payload.sub, function(err, user){
        if (err) { return done(err, false)};

        if (user){      // if it does, call 'done' with that user
            done(null, user);
        }else{   //otherwise, call 'done' without a user object
            done(null, false);
        }
    })
})

// Tell Passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);