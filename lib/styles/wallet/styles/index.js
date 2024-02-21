import path from "path";

const resources = ["devices.scss"];

module.exports = resources.map((file) => path.resolve(__dirname, file));
