import { findALL, create, remove, update} from "../models/userModel.js";

export const getUsers = async (req, res) => {
    try {
        const users = await findALL()//buscar os usuários no banco de dados
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error - Controller" });
    }
}

export const createUser = async (req, res) => {
    try {
        const userData = req.body;
        const result = await create(userData);
        res.status(201).json({ message: "User created successfully", userId: result.lastInsertRowid });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error - Controller" });
        
    }
}

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params; // Obter o ID do usuário a ser removido
        const result = await remove(id); // Chamar a função de remoção do modelo
        if (result.changes === 0) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error - Controller" });
    }
}

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params; // Obter o ID do usuário a ser atualizado
        const userData = req.body; // Obter os dados do usuário a serem atualizados
        const result = await update(id, userData); // Chamar a função de atualização do modelo
        if (result.changes === 0) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User updated successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error - Controller" });
    }
}