const express = require("express");
const config = require("../config");
const jwt = require("jsonwebtoken");
const { UnauthorizedError } = require("../errors");

/**
 * @param {express.Request} req
 * @param {*} res
 * @param {*} next
 */

function isLoggedIn(req, res, next) {
  const token = req.headers.authorization;
  console.log({token});
  if (!token) {
    next(new UnauthorizedError("Login qilinmagan"));
    return;
  }
  try {
    const payload = jwt.verify(token, config.jwt.secret, { ignoreExpiration: false });

    req.user = payload.user;

    next();
  } catch (error) {
    console.log(token);
    next(new UnauthorizedError("Ruxsat yo'q"));
    return;
  }
}

module.exports = isLoggedIn;
