import { MongoClient } from "mongodb"
import { env } from "../../next.config"

async function handler(req, res) {
    if (req.method === "POST") {
        const { email, name, message } = req.body;

        if (!email || !name || !message) {
            res.status(422).json({ message: "Invalid Input" });
            return;
        }

        const newMessage = {
            email, name, message
        };

        let client;

        try {
            const connectionString = `mongodb+srv://${env.mongodb_username}:${env.mongodb_password}@cluster0.yaoste0.mongodb.net/?retryWrites=true&w=majority&appName=${env.mongodb_blustername}`;
            client = await MongoClient.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
        } catch (error) {
            res.status(500).json({ message: error.message, code: "1" });
            return;
        }

        const db = client.db();

        try {
            const result = await db.collection("messages").insertOne(newMessage);
            newMessage.id = result.insertedId;
        } catch (error) {
            res.status(500).json({ message: error.message, code: "2" });
            client.close();
            return;
        }

        client.close();
        res.status(200).json({ message: "Message saved successfully", newMessage });
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}

export default handler;