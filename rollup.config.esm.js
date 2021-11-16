import rollupConfig from "./rollup.config"
export default {...rollupConfig, output: {
    ...rollupConfig.output,
    format: "esm",
}}