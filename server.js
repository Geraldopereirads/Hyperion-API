import { get } from "axios";



import { create, router as _router } from "json-server";
import auth, { rewriter } from "json-server-auth";
import cors from "cors";
const port = 3000;

const app = create();
const router = _router("db.json");

app.db = router.db;

async function main() {
  let isFetching = false;

  const acessUrl = async () => {
    if (isFetching) return;

    isFetching = true;

    try {
      await get('https://hyperion-r5lkcwvyd-geraldopereirads.vercel.app/gameStore');
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      isFetching = false;
    }
  };

  setInterval(acessUrl, 10000);
}


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
