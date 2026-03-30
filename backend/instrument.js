const Sentry = require("@sentry/node");

console.log("SENTRY_DSN:", process.env.SENTRY_DSN); // 👈 debug

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  sendDefaultPii: true,
  tracesSampleRate: 0.2,
  debug: true,
});