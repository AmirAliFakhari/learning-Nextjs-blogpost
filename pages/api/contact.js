import { MongoClient } from "mongodb"

async function handler(req, res) {
    if (req.method === "POST") {
        const { email, name, message } = req.body

        if (!email || !name || !message) {
            res.status(422).json({ message: "Invalid Input" })
            return
        }

        const newMessage = {
            email, name, message
        }

        let client

        try {
            client = await MongoClient.connect('mongodb+srv://amiraliF:32253577Amir@cluster0.yaoste0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        } catch (error) {
            res.status(500).json({ message: error.message, code: "1" })
            return
        }

        const db = client.db()

        try {
            const result = await db.collection("message").insertOne(newMessage)
            newMessage.id = result.insertedId
        } catch (error) {
            res.status(500).json({ message: error.message, code: "2" })
            client.close()
            return
        }

        client.close()
        console.log(newMessage)
        res.status(200).json({ message: "salam :)", newMessage })
    } else {
        res.status(405).json({ message: "Method not allowed" })
    }
}

export default handler
