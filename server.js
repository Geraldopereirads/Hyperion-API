import axios from "axios";
import cors from "cors";
import jsonServer from "json-server";
import auth from "json-server-auth";
const { create, rewriter } = jsonServer;
const port = 3001;

const app = create();
const router = create();
const rules = rewriter({
  users: 600,
});

app.db = router.db;

async function main() {
  const accessUrl = async () => {
    try {
      await axios.get('https://hyperion-r5lkcwvyd-geraldopereirads.vercel.app/gameStore');
    } catch (error) {
      console.error("Error fetching data:", error);
      setInterval(accessUrl, 5000);
    }
  }

  setInterval(accessUrl, 10000);
}

main();

app.use(cors());
app.use(rules);
app.use(auth);
app.use(router);

app.listen(port, () => {
  console.log("Server is running on port:", port);
});
