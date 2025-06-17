import { findALL } from "../models/userModel.js";

export const getUsers = async (req, res) => {
    try {
        const users = await findALL()//buscar os usuários no banco de dados
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error - Controller" });
    }
}