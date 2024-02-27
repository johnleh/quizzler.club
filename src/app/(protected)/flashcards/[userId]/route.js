//Get All Flashcard Sets
import clientPromise from '@/utils/backend/mongodb'
import mongoOptions from '@/utils/backend/mongodb'
import { ObjectId } from "mongodb";
import { useRouter } from 'next/navigation'

export async function GET(req, res) {
    const client = await clientPromise;
    const db = client.db("quizzler_data");
    const router = useRouter()
    console.log("router")
    console.log(router)
    console.log("request")
    console.log(req)
    const userId = "651db98742ea8dbe83c1bb83"

    const filter = {_id: new ObjectId(userId)}

    let findResponse = await db.collection('users').findOne(filter)

    return Response.json(findResponse)

    
}