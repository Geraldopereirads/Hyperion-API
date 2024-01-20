const axios = require("axios");



const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");
const port = 3000;

const app = jsonServer.create();
const router = jsonServer.router("db.json");

app.db = router.db;

async function main() {
  let isFetching = false;

  const acessUrl = async () => {
    if (isFetching) return;

    isFetching = true;

    try {
      await axios.get('https://hyperion-r5lkcwvyd-geraldopereirads.vercel.app/gameStore');
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      isFetching = false;
    }
  };

  setInterval(acessUrl, 10000);
}


const rules = auth.rewriter({
  users: 600,
});

app.use(cors());
app.use(rules);
app.use(auth);
app.use(router);
app.listen(port);

main();



console.log("Server is running on port:", port);

/* A senha do Kenzinho é 123456 */
