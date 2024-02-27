//Get All Flashcard Sets
import clientPromise from '@/utils/backend/mongodb'
import mongoOptions from '@/utils/backend/mongodb'
import { ObjectId } from "mongodb";

export async function GET(req, res) {
    const client = await clientPromise;
    const db = client.db("quizzler_data");
    const setId = "651db98742ea8dbe83c1bb83"

    const filter = {_id: new ObjectId(userId)}

    let findResponse = await db.collection('users').findOne(filter)

    return Response.json(findResponse)

    
}