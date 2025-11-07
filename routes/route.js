import express from "express";
import { home } from "../controllers/home.js";
import { about } from "../controllers/about.js";
import { projects } from "../controllers/projects.js";
import { contact } from "../controllers/contact.js";
const route = express.Router();


route.get('/',home);
route.get('/about',about);
route.get('/projects', projects);
route.get('/contact', contact)

export default route;

