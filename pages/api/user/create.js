import { getDatabase, ref, push, set } from "firebase/database"

export default async function comments(req, res) {
    const database = getDatabase();
    const result = await set(ref(database, 'users/'+ req.id), {
        ...req.body
    }).then(res => console.log(res.val()))
   
    // try {
    //     return res.status(200).send(result.json());
    // } catch (error) {
    //     return res.status(500).send(error);
    // }
}