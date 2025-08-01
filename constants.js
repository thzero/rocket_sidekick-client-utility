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
			Altimeters: true,
			Checklists: true,
			ChuteProtectors: true,
			ChuteReleases: true,
			DeploymentBags: true,
			Gallery: true,
			Inventory: true,
			Launches: true,
			Locations: true,
			DeploymentBags: true,
			Motors: false,
			MotorCases: false,
			Parachutes: true,
			Rockets: true,
			Streamers: true,
			Trackers: true
		}
	},
	InjectorKeys: {
		SERVICE_API: 'serviceApi',
		SERVICE_CHECKLISTS: 'serviceChecklists',
		SERVICE_COUNTRIES: 'serviceCountries',
		SERVICE_INVENTORY: 'serviceInventory',
		SERVICE_LAUNCHES: 'serviceLaunches',
		SERVICE_LOCATIONS: 'serviceLocations',
		SERVICE_MANUFACTURERS: 'serviceManufacturers',
		SERVICE_MOTORS: 'serviceMotorsSearch',
		SERVICE_PARTS: 'serviceParts',
		SERVICE_ROCKETS: 'serviceRockets',
		SERVICE_ROCKETSETUPS: 'serviceRocketSetups',
		SERVICE_TOOLS_CALCULATION_ENGINE: 'serviceToolsCalculationEngine',
		SERVICE_TOOLS_PARACHUTE_SIZING: 'serviceToolsParachuteSizing',
		SERVICE_TOOLS_THRUST2WEIGHT: 'serviceToolsThrust2Weight',
		SERVICE_TOOLS_WEATHERCOCKING: 'serviceToolsWeathercocking'
	},
	Overlay: {
		Timeout: 5000
	},
	RocketTypes: {
		Site: 'site',
		Yours: 'yours'
	},
	Tools: {
		ParachuteSizing: {
			calculationTypes: {
				diameter: 'diameter',
				velocity: 'velocity'
			},
			shapes: {
				circle: 'circle',
				hexagon: 'hexagon',
				octagon: 'octagon'
			}
		}
	}
};

export default Constants;
