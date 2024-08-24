
require('dotenv').config();
const jwt = require('jsonwebtoken');

// module.exports = function (req, res, next) {
//   const token = req.header('x-auth-token');

//   if (!token) {
//     return res.status(401).json({ message: 'No token, authorization denied' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded.user;
//     next();
//   } catch (err) {
//     res.status(401).json({ message: 'Token is not valid' });
//   }
// };

module.exports = function  (req, res, next) {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Access denied' });
  }

  try {
    console.log(token);
    console.log( process.env.JWT_SECRET);
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    console.log("hello world");

    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token' });
  }
};
