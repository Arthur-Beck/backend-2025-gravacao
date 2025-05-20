export const getUsers = (req, res) => {
    try {
        //buscar os usuários no banco de dados
        res.status(200).json({ message: "Get Users" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error - Controller" });
    }
}