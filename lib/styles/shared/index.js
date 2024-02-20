import path from "path";

const resources = [
    "constants.scss",
    "mixins.scss",
    "fonts.scss",
    "inline-icons.scss",
    "devices.scss",
];

module.exports = resources.map((file) => path.resolve(__dirname, file));
