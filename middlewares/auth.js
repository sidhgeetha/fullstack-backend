// const jwt = require("jsonwebtoken");
// const config = require("../utils/config");

// const auth = {
//   verifyToken: (request, response, next) => {
//     try {
//       console.log(request.cookies);
//       // Get the token from request headers
//       // const token = request.headers.authorization;
//       // const token = request.get("authorization");

//       const token = request.cookies.token;

//       //if token is missing, return error
//       if (!token) {
//         return response.status(401).json({ error: "Token missing" });
//       }

//       // const getToken = (token) => {
//       //   if (token && token.toLowerCase().startsWith("bearer ")) {
//       //     return token.substring(7);
//       //   }
//       //   return null;
//       // };

//       // Verify token
//       try {
//         //const decodedToken = jwt.verify(getToken(token), config.JWT_SECRET);
//         const decodedToken = jwt.verify(token, config.JWT_SECRET);

//         // Add decoded token to request for further use
//         request.userId = decodedToken.id;
//         next();
//       } catch (error) {
//         return response.status(401).json({ error: "Invalid token" });
//       }
//     } catch (error) {
//       response.status(500).json({ error: "Internal server error" });
//     }
//   },
// };

// module.exports = auth;

const jwt = require("jsonwebtoken");
const config = require("../utils/config");

const auth = {
  verifyToken: (request, response, next) => {
    // console.log(request.cookies);
    try {
      // get the token from the request
      // const token = request.get('authorization');
      // const token = request.headers.authorization;
      const token = request.cookies.token;

      // console.log(token);

      // if the token is missing, return an error
      if (!token) {
        return response.status(401).json({ message: "Token missing" });
      }

      // const getToken = (token) => {
      //   if (token && token.toLowerCase().startsWith("bearer ")) {
      //     return token.substring(7);
      //   }

      //   return null;
      // };

      // verify the token
      try {
        // const decodedToken = jwt.verify(getToken(token), config.JWT_SECRET);
        const decodedToken = jwt.verify(token, config.JWT_SECRET);

        // add the decoded token to the request object
        request.userId = decodedToken.id;
        next();
      } catch (error) {
        return response.status(401).json({ message: "Invalid token" });
      }
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  },
};

module.exports = auth;
