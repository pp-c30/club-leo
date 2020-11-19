import { conexion } from "../database";
import { Request, Response } from "express";
import { Obra } from "../models/obra";
import cloudinary from "cloudinary";
import fs from "fs-extra";