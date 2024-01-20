const axios = require("axios");
import cors from "cors";
import { router as _router, create } from "json-server";
import auth, { rewriter } from "json-server-auth";

const port = 3000;

const app = create();
const router = _router("db.json");

app.db = router.db;

async function main() {
  const acessUrl = async () => {
    try {
      await axios.get('https://hyperion-r5lkcwvyd-geraldopereirads.vercel.app/gameStore');
    } catch (error) {
      console.error("Error fetching data:", error);
      setInterval(acessUrl, 5000);
    }
  };

  setInterval(acessUrl, 10000);
}

main()

const rules = rewriter({
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
