const axios = require("axios");
const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");
const port = process.env.PORT || 3001;

const app = jsonServer.create();
const router = jsonServer.router("db.json");

app.db = router.db;

async function main() {
  const acessUrl = async () => {
    try {
      await axios.get("https://hyperion-r5lkcwvyd-geraldopereirads.vercel.app/gameStore")
    } catch (error) {
      setInterval(acessUrl, 5000)
    }
  }

  setInterval(acessUrl, 10000)
  await new Promise(() => { })

}

main()


const rules = auth.rewriter({
  users: 600,
});

app.use(cors());
app.use(rules);
app.use(auth);
app.use(router);
app.listen(port);

console.log("Server is running on port:", port);

/* A senha do Kenzinho é 123456 */
