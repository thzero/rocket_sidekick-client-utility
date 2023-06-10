const Constants = {
	DateTime: {
		DEFAULT_DATE_FORMAT: 'MM/DD/YYYY',
		DEFAULT_TIME_FORMAT: 'HH:mm'
	},
	External: {
		github: 'https://github.com/thzero/rocket_sidekick-client',
		images: 'https://imagesrocketsidekick.thzero.com',
		store: {
			android: null,
			ios: null,
		},
		thrustCurve: 'https://thrustcurve.org',
		url: 'https://rocketsidekick.thzero.com'
	},
	ExternalKeys: {
		MotorSearch: 'motorSearch'
	},
	Features: {
		Auth: false,
		CookieComply: true,
		Home: {
			additional: false,
			additionalId: null,
			slideshow: true
		},
		MobileAppLanding: false,
		MobileOnly: false,
		Rockets: true,
		Favorites: true,
		RememberMe: false,
		Statistics: false,
		Yours: {
			value: false,
			Altimeters: false,
			Checklists: false,
			Launches: false,
			Parachutes: false,
			Rockets: false
		}
	},
	InjectorKeys: {
		SERVICE_API: 'serviceApi',
		SERVICE_EXTERNAL_MOTOR_SEARCH: 'serviceExternalMotorSearch',
		SERVICE_CHECKLISTS: 'serviceChecklists',
		SERVICE_MANUFACTURERS: 'serviceManufacturers',
		SERVICE_PARTS: 'serviceParts',
		SERVICE_ROCKETS: 'serviceRockets',
		SERVICE_TOOLS_CALCULATION_ENGINE: 'serviceToolsCalculationEngine',
		SERVICE_TOOLS_PARACHUTE_SIZING: 'serviceToolsParachuteSizing',
		SERVICE_TOOLS_THRUST2WEIGHT: 'serviceToolsThrust2Weight',
		SERVICE_TOOLS_WEATHERCOCKING: 'serviceToolsWeathercocking'
	},
	RocketTypes: {
		Site: 'site',
		Yours: 'yours'
	}
};

export default Constants;
