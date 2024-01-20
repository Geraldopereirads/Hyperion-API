import { create, router as _router } from "json-server";
import auth, { rewriter } from "json-server-auth";
import cors from "cors";
export const port = 3000;

export const app = create();
const router = _router("db.json");

app.db = router.db;

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
