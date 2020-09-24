let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../routes/user");

var should = chai.should();

// chai.should();
chai.use(chaiHttp);

describe("Get Users by Id", function () {
     it("It should get the single user", function() {
         chai.request("http://localhost:8000/api")
            .get("/user/:userId")
    })

})
//         .end((err,response) => {
//             response.body.should.have.property('data')
//             .which.is.an('object')
//             .and.has.property('_id')
//             // response.body.should.have.property("name").eq("Vrushali Shinde");
//             // response.body.should.have.property("email");
//             // response.body.should.have.property("role");
//             done();
//         })
//     })
// })