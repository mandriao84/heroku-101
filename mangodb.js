const {
  MongoClient
} = require('mongodb')

const uri = "mongodb+srv://admin:admin@cluster0.zshub.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function addData() {
  try {
    await client.connect()
    const db = client.db("ark")
    const collection = db.collection('collection-1')

    // const data = [{
    //   "test1": "1",
    //   "test2": "2"
    // }]
    // await collection.insertMany(data, {
    //   "ordered": true
    // })

    const collection_updated = await collection.find({}).toArray()
    console.log(collection_updated)
    const result = collection_updated.filter(r => r["test1"])

    console.log(result)

  } catch (e) {
    console.error(e)
  } finally {
    await client.close()
  }
}

addData().then(() => {
  client.close()
})