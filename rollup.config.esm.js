import rollupConfig from "./rollup.config"
export default {...rollupConfig, output: {
    ...rollupConfig.output,
    format: "esm",
    file: "./dist/uvalid.esm.js",
    name: "uvalid.esm.js"
}}