let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../routes/product");

chai.should();
chai.use(chaiHttp);

//get by ID
describe("Get Products by Id", () => {
    it("It should get the single product", (done) => {
        chai.request("http://localhost:8000/api")
        .get("/product/5f4624a1056f442d2455a521")
        .end((err,response) => {
            response.should.have.status(200);
            response.body.should.be.a("Object");
            response.body.should.have.property("_id");
            response.body.should.have.property("name").eq("Carrier AC");
            response.body.should.have.property("price");
            response.body.should.have.property("quantity");
            done();
        })
    })
})

//Create the product
describe("Get the product created", () => {
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjUwYWViMmRmY2UxYzMxNzg2ZmNiNDciLCJpYXQiOjE1OTkxMzgzMTh9.nkFRcdPXPsqH3ToMhgXMKWx4zRCiBwamaLExvOwHgqg"
    it("It should create a single product", function() {
        let product={
            name:"Nokia",
            description:"Smart Phone",
            price:"Rs. 5000",
            category:"MOBILES"
        }
            chai.request("http://localhost:8000/api")
            .post("/product/create/5f50aeb2dfce1c31786fcb47")
              .set({ "Authorization": `Bearer ${token}` })
              .send(product)
              return Promise.resolve(product)
              })
         })

//List of product
describe("Get Products List", () => {
    it("It should get the list of product", (done) => {
        chai.request("http://localhost:8000/api")
        .get("/products")
        .end((err,response) => {
            response.should.have.status(200);
            done();
        })
    })
})

//delete the product
describe("Delete Products List", () => {
    it("It should delete the given product", (done) => {
        let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjUwYWViMmRmY2UxYzMxNzg2ZmNiNDciLCJpYXQiOjE1OTkxMzgzMTh9.nkFRcdPXPsqH3ToMhgXMKWx4zRCiBwamaLExvOwHgqg"
        chai.request("http://localhost:8000/api")
        .delete("/product/5f462541056f442d2455a523/5f50aeb2dfce1c31786fcb47")
        .set({ "Authorization": `Bearer ${token}` })
        .end((err,response) => {
            response.should.have.status(200);
            done();
        })
    })
})

//update the product
describe("Updates the product", () => {
    it("It should update the given product", (done) => {
        let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjUwYWViMmRmY2UxYzMxNzg2ZmNiNDciLCJpYXQiOjE1OTkxMzgzMTh9.nkFRcdPXPsqH3ToMhgXMKWx4zRCiBwamaLExvOwHgqg"
        chai.request("http://localhost:8000/api")
        .put("/product/5f4617964a901733540ebd3f/5f50aeb2dfce1c31786fcb47")
        .set({ "Authorization": `Bearer ${token}` })
        .end((err,response) => {
            response.should.have.status(200);
            done();
        })
    })
})

