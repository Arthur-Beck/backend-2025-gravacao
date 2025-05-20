export const getPayments = (req, res) => {
    try {
        //buscar os pagamentos no banco de dados
        res.status(200).json({ message: "Get Payments" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error - Controller" });
    }
}