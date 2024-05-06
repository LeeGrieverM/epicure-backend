import swaggerAutogen from "swagger-autogen";
import path from "path";

const outputFile = "./swagger_output.json";
const endpointsFiles = [path.resolve("./routes/*.ts")]; 

swaggerAutogen()(outputFile, endpointsFiles);
