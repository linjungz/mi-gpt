import config from "./.migpt.js";
import { MiGPT } from "mi-gpt";
import dotenv from "dotenv";

dotenv.config();

async function main() {
  const migpt = MiGPT.create({
    speaker: config.speaker,
    bot: config.bot,
    master: config.master,
  });
  await migpt.start();
}

main();
