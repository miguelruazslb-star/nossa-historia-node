const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

// Servir o site
app.use(express.static(path.join(__dirname, "public")));

// Servir as fotos e vídeos
app.use("/fotos", express.static(path.join(__dirname, "fotos")));

app.listen(PORT, () => {
    console.log(`Servidor iniciado em http://localhost:${PORT}`);
});