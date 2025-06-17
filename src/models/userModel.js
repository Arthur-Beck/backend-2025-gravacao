import database from '../../db/connection.js';

export async function findALL() {
    try {
        const query = "SELECT id, username, email, photo from users;";
        const statement = database.prepare(query);
        const users = statement.all();
        //austatement.finalize();
        return users;
    } catch (error) {
        console.log(error);
        throw new Error("Error fetching users: " + error.message);
    } finally {
        
        database.close();
    }
}