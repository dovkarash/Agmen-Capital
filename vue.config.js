module.exports = {
	pluginOptions: {
		prerenderSpa: {
			registry: undefined,
			renderRoutes: [
				'/',
				'/Privacypolicy',
				'/Termsofuse',
				'/team'
			],
			useRenderEvent: true,
			onlyProduction: true,

			headless: true,
			customRendererConfig:
			{
				args: ['--auto-open-devtools-for-tabs']
			}
		}
	}
}
