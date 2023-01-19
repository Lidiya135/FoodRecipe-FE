export default function login(req, res) {
    console.log(req.method);
    if (req.method == "POST") {
      console.log("add token to cookie");
      const token = req.body.token;
      const id = req.body.id;
      console.log(id);
      res.setHeader(
        "Set-Cookie",
        `token=${token}; Path=/ ; httpOnly ; Max-Age : 9000000000; Secure ; SameSite=None`,
        `id=${id}; Path=/ ; httpOnly ; Max-Age : 9000000000; Secure ; SameSite=None`
      );
      res.send({
        logout: false,
        login: true,
      });
    } else {
      res.send({
        logout: true,
      });
    }
  }