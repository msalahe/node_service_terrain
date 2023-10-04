const fs = require("fs");
const  JSONReader = require("../json-reader");
class TerrainDao{
    constructor(){

    }
    async list(){
    let jr = new JSONReader();
       let data = await jr.read("terrain.json");
   
        return data;
     
    }
}
let terrainDao = new TerrainDao();
module.exports = terrainDao;