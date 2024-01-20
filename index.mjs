import axios from "axios";
import { app, port } from "./server";

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
app.listen(port, () => console.log(`servidor rodando na porta:${port}`))