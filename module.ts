import { module } from "@prisma/composer";
import appService from "./service.ts";

export default module("flagshiprouter", ({ provision }) => {
  provision(appService);
});
