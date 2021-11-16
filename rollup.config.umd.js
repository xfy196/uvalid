import rollupConfig from "./rollup.config"
export default {...rollupConfig, output: {
    ...rollupConfig.output,
    format: "umd",
    file: "./dist/uvalid.umd.js",
    name: "uvalid.umd.js"
}}