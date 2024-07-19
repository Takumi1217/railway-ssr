import express from "express";
import fs from "fs";
import path from "path";
import ReactDOMServer from "react-dom/server";
import { createElement } from "react";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import App from "../src/App.tsx";

const app = express();
const PORT = 9000;

app.use("^/$", (req, res) => {
  fs.readFile(path.resolve("./public/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading index.html", err);
      return res.status(500).send("An error occurred");
    }

    const sheet = new ServerStyleSheet();
    const html = ReactDOMServer.renderToString(
      createElement(
        StyleSheetManager,
        { sheet: sheet.instance },
        createElement(App)
      )
    );
    const styleTags = sheet.getStyleTags();

    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${html}</div>${styleTags}`
      )
    );
  });
});

app.use(express.static(path.resolve(__dirname, "..", "public")));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
