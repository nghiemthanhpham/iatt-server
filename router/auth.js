require('dotenv').config();

const fastifyPassport = require('@fastify/passport');
const { accountService } = require('~/service');

function authRoute(fastify, options, done) {
  fastify.get(
    '/google',
    {
      preValidation: fastifyPassport.authenticate('google', { scope: ['profile', 'email'] })
    },
    async () => {
      console.log('>>>>> Redirecting to Google for Authentication <<<<<<');
    }
  );
  fastify.get(
    '/google/callback',
    {
      preValidation: fastifyPassport.authenticate('google', { failureRedirect: process.env.CLIENT_URL })
    },
    async function (req, reply) {
      try {
        const dataAccount = {
          email: req.user?.emails[0]?.value?.toLowerCase(),
          password: "",
          name: req.user?.displayName,
          phone: "",
          avatar: req.user?.picture,
          address: "",
          ward: "",
          district: "",
          province: "",
          status: true,
        };
        const account = await accountService.getAccountByEmail(req.user?.emails[0]?.value?.toLowerCase())
        if (account) {
          reply.redirect(`${process.env.CLIENT_URL}?email=${req.user?.emails[0]?.value?.toLowerCase()}`);
        } else {
          await accountService.createAccount(dataAccount)
          reply.redirect(`${process.env.CLIENT_URL}?email=${req.user?.emails[0]?.value?.toLowerCase()}`);
        }
      } catch (error) {
        reply.redirect(`${process.env.CLIENT_URL}?email=null`);
      }
    }
  );
  done();
}

module.exports = authRoute;
