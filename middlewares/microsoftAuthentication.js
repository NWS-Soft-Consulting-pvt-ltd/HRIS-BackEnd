const passport = require("passport");
const MicrosoftStrategy = require("passport-microsoft").Strategy;

const MICROSOFT_GRAPH_CLIENT_ID = "---your--microsoft--graph--client--id---";
const MICROSOFT_GRAPH_CLIENT_SECRET =
  "---your--microsoft--graph--client--secret---";

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

passport.use(
  new MicrosoftStrategy(
    {
      clientID: MICROSOFT_GRAPH_CLIENT_ID,
      clientSecret: MICROSOFT_GRAPH_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/microsoft-login/callback",
      scope: ["user.read"],
    },
    function (accessToken, refreshToken, profile, done) {
      // asynchronous verification, for effect...
      process.nextTick(function () {
        // To keep the example simple, the user's Microsoft Graph profile is returned to
        // represent the logged-in user. In a typical application, you would want
        // to associate the Microsoft account with a user record in your database,
        // and return that user instead.
        return done(null, profile);
      });
    }
  )
);

module.exports = passport.authenticate("microsoft");
