const axios = require("axios");
const cors = require("cors");
const jsonServer = require("json-server");
const auth = require("json-server-auth");

const port = 3001;

const app = jsonServer.create();
const router = jsonServer.router("db.json");

app.db = router.db;

async function main() {
  const accessUrl = async () => {
    try {
      await axios.get('https://hyperion-r5lkcwvyd-geraldopereirads.vercel.app/gameStore');
    } catch (error) {
      console.error("Error fetching data:", error);
      setInterval(accessUrl, 5000);
    }
  };

  setInterval(accessUrl, 10000);
}

main();

const rules = auth.rewriter({
  users: 600,
});

app.use(cors());
app.use(rules);
app.use(auth);
app.use(router);
app.listen(port, () => {
  console.log("Server is running on port:", port);
});

main();
