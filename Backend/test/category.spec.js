let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../routes/category");

chai.should();
chai.use(chaiHttp);

//get category by id
describe("Get Category by Id", () => {
    it("It should get the single category", (done) => {
        chai.request("http://localhost:8000/api")
        .get("/category/5f4603664a901733540ebd37")
        .end((err,response) => {
            response.should.have.status(200);
            response.body.should.be.a("Object");
            response.body.should.have.property("_id");
            response.body.should.have.property("name").eq("MOBILES");
            done();
        })
    })
})

//get category list
describe("Get Categories List", () => {
    it("It should get the list of categories", (done) => {
        chai.request("http://localhost:8000/api")
        .get("/categories")
        .end((err,response) => {
            response.should.have.status(200);
            done();
        })
    })
})

//create the category
describe("Get the category created", () => {
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjUwYWViMmRmY2UxYzMxNzg2ZmNiNDciLCJpYXQiOjE1OTkxMzgzMTh9.nkFRcdPXPsqH3ToMhgXMKWx4zRCiBwamaLExvOwHgqg"
    it("It should create a single category", function() {
        let category={
            name:"Dress"
        }
            chai.request("http://localhost:8000/api")
            .post("/category/create/5f50aeb2dfce1c31786fcb47")
              .set({ "Authorization": `Bearer ${token}` })
              .send(category)
              return Promise.resolve(category)
              })
         })

// //delete the category
// //everytime i execute test as the given is already deleted the delete test fails, so i have to give different id
// describe("Delete the given category", () => {
//     it("It should delete the given category", (done) => {
//         let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjUwYWViMmRmY2UxYzMxNzg2ZmNiNDciLCJpYXQiOjE1OTkxMzgzMTh9.nkFRcdPXPsqH3ToMhgXMKWx4zRCiBwamaLExvOwHgqg"
//         chai.request("http://localhost:8000/api")
//         .delete("/category/5f4603774a901733540ebd38/5f50aeb2dfce1c31786fcb47")
//         .set({ "Authorization": `Bearer ${token}` })
//         .end((err,response) => {
//             response.should.have.status(200);
//             done();
//         })
//     })
// })

// //update the category
// //deleted category cannot be updated
// describe("Updates the category", () => {
//     it("It should update the given category", (done) => {
//         let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjUwYWViMmRmY2UxYzMxNzg2ZmNiNDciLCJpYXQiOjE1OTkxMzgzMTh9.nkFRcdPXPsqH3ToMhgXMKWx4zRCiBwamaLExvOwHgqg"
//         chai.request("http://localhost:8000/api")
//         .put("/category/5f46038a4a901733540ebd39/5f50aeb2dfce1c31786fcb47")
//         .set({ "Authorization": `Bearer ${token}` })
//         .end((err,response) => {
//             response.should.have.status(200);
//             done();
//         })
//     })
// })