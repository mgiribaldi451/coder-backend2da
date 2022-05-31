import axios from "axios"
import express, { Express } from "express";
import api from "./api";
import http, { Server } from 'http'

const app: Express = express();
app.use(express.json());
app.use("/api/", api);
app.listen(8080, () => {
    console.log('Server on port 8080');
})

