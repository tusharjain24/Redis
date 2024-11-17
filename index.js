import { client } from "./client.js";

async function init() {
  const result1 = await client.get("user:2");
  const result2 = await client.set(
    "msg:4",
    "This is just not good for my health"
  );
  const result3 = await client.get("msg:4");
  console.log("RESULT_GET: ", result1);
  console.log("RESULT_SET: ", result2);
  console.log("RESULT_GET_MSG:4 : ", result3);
}
init();
