import { serverHttp } from "./app";

serverHttp.listen(4000, () => {
  console.log(`App is Runing on Port 4000!`);
});