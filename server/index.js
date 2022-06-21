const express = require('express');

const cors = require('cors');
const bodyParser = require('body-parser');
const ObjectId = require('mongodb').ObjectId;
require('dotenv').config();

const app = express();
const port =process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());



const { MongoClient, ServerApiVersion } = require('mongodb');
const { request, response } = require('express');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.0z2dr.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {

    try {
  
      await client.connect();
  
      const database = client.db("Tirtha_Database");
  
      const novelsCollection = database.collection("Novels");
  
      // create a document to insert novels
  
      app.post('/api/novels', async(request,response)=>{

        const newNovels=request.body;
  
        const result = await novelsCollection.insertOne(newNovels);
    
        console.log(`A document was inserted with the _id: ${result.insertedId}`);

        response.send(result);
      });

      //get all the novels

      app.get('/api/novels', async(request,response)=>{
        
        const getNovelList= novelsCollection.find({});

        const NovelList =await getNovelList.toArray();

        response.send(NovelList);

      });

      //get a partical novel

      app.get('/api/novels/:id', async(request,response)=>{

        const id= request.params.id;

        const query ={_id: ObjectId(id) };

        const novel =await novelsCollection.findOne(query);

        response.send(novel);

      });

      app.patch('/api/novels/:id', async(req,res)=>{
        const id=req.params.id;
        const query ={_id:ObjectId(id)};
        const updateChapter=req.body;
        const options ={upsert:true};
        const updateDoc={
          $push:{
            Chapters:{
              Chapter_no: updateChapter.Chapter_no,
              Chapter_name: updateChapter.Chapter_name,
              Chapter_text: updateChapter.Chapter_text,
              Last_update: updateChapter.Last_update
            }
            
          }
        };
        const result=await novelsCollection.updateOne(query,updateDoc,options);
        console.log("updated");
        res.json(result)
      });


      app.delete('/api/novels/:id',async(req,res)=>{
        const id=req.params.id;
        const query ={_id:ObjectId(id)};
        const result=await novelsCollection.deleteOne(query);
        console.log("deleted: ",result);
        res.json(result);
      });
  
    } finally {
  
    //   await client.close();
  
    }
  
  }
  
  run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Running Tirtha server Successfully');
});

app.listen(port, () => {
    console.log('Running Server onn port', port);
})



// {
//     "Name":"Stupore E Tremori",
//     "Author":"Tirtha Chowdhury",
//     "Genre":"Adventure , Comedy",
//     "Synopsis":"Cursus at sit eget tortor sit praesent molestie vulputate purus. Et eget mattis elit ipsum. Sit tempus consectetur eu ipsum diam dictum amet. Vel orci risus id proin sed aliquet platea sapien. Pretium velit tempus integer tempor, nulla. Venenatis, vitae posuere id amet, in faucibus diam gravida sed. Nunc cras dictum tristique vel. Congue scelerisque fringilla est quis neque ac sagittis dui viverra. Aliquet nisl sagittis aliquam enim sit id cursus. At adipiscing tellus massa lectus sed.",
//     "Tags":["Action","Fiction"],
//     "Chapters":[
//         {
//             "Chapter_no":"1",
//             "Chapter_name":"hshshs",
//             "Chapter_text":"Cursus at sit eget tortor sit praesent molestie vulputate purus. Et eget mattis elit ipsum. Sit tempus consectetur eu ipsum diam dictum amet. Vel orci risus id proin sed aliquet platea sapien. Pretium velit tempus integer tempor, nulla. Venenatis, vitae posuere id amet, in faucibus diam gravida sed. Nunc cras dictum tristique vel. Congue scelerisque fringilla est quis neque ac sagittis dui viverra. Aliquet nisl sagittis aliquam enim sit id cursus. At adipiscing tellus massa lectus sed.",
//             "Last_update":"22-03-2002"
//         },
//         {
//             "Chapter_no":"2",
//             "Chapter_name":"hshshs",
//             "Chapter_text":"Cursus at sit eget tortor sit praesent molestie vulputate purus. Et eget mattis elit ipsum. Sit tempus consectetur eu ipsum diam dictum amet. Vel orci risus id proin sed aliquet platea sapien. Pretium velit tempus integer tempor, nulla. Venenatis, vitae posuere id amet, in faucibus diam gravida sed. Nunc cras dictum tristique vel. Congue scelerisque fringilla est quis neque ac sagittis dui viverra. Aliquet nisl sagittis aliquam enim sit id cursus. At adipiscing tellus massa lectus sed.",
//             "Last_update":"22-03-2002"
//         }

//     ],
//     "thumbnail":"https://xyz.com",
//     "Ratings":[ ],
//     "Views":[],
//     "Likes":[],
//     "Reviews":[
//         {
//             "User_id":"999i9i",
//             "date":"22-03-2002",
//             "Review":"lorem ipsum de color sit"
            
//         },
//         {
//             "User_id":"999i94",
//             "date":"22-03-2002",
//             "Review":"lorem ipsum de color sit"
//         },
//         {
//             "User_id":"999i5i",
//             "date":"22-03-2002",
//             "Review":"lorem ipsum de color sit"
//         }
//     ]

// }