const isProductionEnv = "production"

const config = {
    corsUrl: isProductionEnv ? "https://cors.zenno.moe" : "https://cors.zenno.moe",
    isProductionEnv,
}

export default config
