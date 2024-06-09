import React from "react";
const DATABASE_PATH = "/src/database.json";
import { readFile, writeFile } from "../helpers/file-helpers";

function HitCounter({ hits }) {
  const jsonObj = JSON.parse(readFile(DATABASE_PATH));
  jsonObj.hits = jsonObj.hits + 1;
  writeFile(DATABASE_PATH, JSON.stringify(jsonObj));

  return jsonObj.hits;
}

export default HitCounter;
