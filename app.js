import config from "./.migpt.js";
import { MiGPT } from "mi-gpt";



async function main() {
  const migpt = MiGPT.create({
    speaker: config.speaker,
    bot: config.bot,
    master: config.master,
  });
  await migpt.start();
}

main();
