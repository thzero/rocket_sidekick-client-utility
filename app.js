import AppCommonConstants from 'rocket_sidekick_common/constants';

import LibraryCommonUtility from '@thzero/library_common/utility';

import SettingsUser from 'rocket_sidekick_common/data/settingsUser';

class AppUtility {
	static isDebug = false;

	// TODO: move to library
	static debug(args) {
		if (!AppUtility.isDebug)
			return;
		console.debug(args);
	}

	// TODO: move to library
	static debug2(name, value) {
		if (!AppUtility.isDebug)
			return;

		// eslint-disable-next-line no-unneeded-ternary
		const output = name + ': ' + (value ? value : 'null');
		console.debug(output);
	}

	static info(args) {
		console.info(args);
	}

	static initializeSettingsUser() {
		const settings = new SettingsUser();
		settings.measurementUnits = {
			id: AppCommonConstants.MeasurementUnits.english.id
		};
		settings.measurementUnits.id = AppCommonConstants.MeasurementUnits.english.id;
		settings.measurementUnits.acceleration = AppCommonConstants.MeasurementUnits.english.acceleration.default;
		settings.measurementUnits.area = AppCommonConstants.MeasurementUnits.english.area.default;
		settings.measurementUnits.distance = AppCommonConstants.MeasurementUnits.english.distance.default;
		settings.measurementUnits.length = AppCommonConstants.MeasurementUnits.english.length.default;
		settings.measurementUnits.velocity = AppCommonConstants.MeasurementUnits.english.velocity.default;
		settings.measurementUnits.volume = AppCommonConstants.MeasurementUnits.english.volume.default;
		settings.measurementUnits.weight = AppCommonConstants.MeasurementUnits.english.weight.default;
		return settings;
	}

	static measurementUnitsId(correlationId, settings) {
		return settings && settings.measurementUnits && settings.measurementUnits.id ? settings.measurementUnits.id : AppCommonConstants.MeasurementUnits.english.id;
	}

	static measurementUnits(correlationId, settings) {
		return AppCommonConstants.MeasurementUnits[AppUtility.measurementUnitsId(correlationId, settings)];
	}

	static measurementUnitsAccelerationId(correlationId, settings, measurementUnitsId) {
		measurementUnitsId = !String.isNullOrEmpty(measurementUnitsId) ? measurementUnitsId : AppUtility.measurementUnitsId(correlationId, settings);
		return settings && settings.measurementUnits && settings.measurementUnits.acceleration ? settings.measurementUnits.acceleration
			: AppCommonConstants.MeasurementUnits[measurementUnitsId].acceleration.default;
	}

	static measurementUnitAreaId(correlationId, settings, measurementUnitsId) {
		measurementUnitsId = !String.isNullOrEmpty(measurementUnitsId) ? measurementUnitsId : AppUtility.measurementUnitsId(correlationId, settings);
		return settings && settings.measurementUnits && settings.measurementUnits.area ? settings.measurementUnits.area
			: AppCommonConstants.MeasurementUnits[measurementUnitsId].area.default;
	}

	static measurementUnitDensityId(correlationId, settings, measurementUnitsId) {
		measurementUnitsId = !String.isNullOrEmpty(measurementUnitsId) ? measurementUnitsId : AppUtility.measurementUnitsId(correlationId, settings);
		return settings && settings.measurementUnits && settings.measurementUnits.density ? settings.measurementUnits.density
			: AppCommonConstants.MeasurementUnits[measurementUnitsId].density.default;
	}

	static measurementUnitDistanceId(correlationId, settings, measurementUnitsId) {
		measurementUnitsId = !String.isNullOrEmpty(measurementUnitsId) ? measurementUnitsId : AppUtility.measurementUnitsId(correlationId, settings);
		return settings && settings.measurementUnits && settings.measurementUnits.distance ? settings.measurementUnits.distance
			: AppCommonConstants.MeasurementUnits[measurementUnitsId].distance.default;
	}

	static measurementUnitFluidId(correlationId, settings, measurementUnitsId) {
		measurementUnitsId = !String.isNullOrEmpty(measurementUnitsId) ? measurementUnitsId : AppUtility.measurementUnitsId(correlationId, settings);
		return settings && settings.measurementUnits && settings.measurementUnits.fluid ? settings.measurementUnits.fluid
			: AppCommonConstants.MeasurementUnits[measurementUnitsId].fluid.default;
	}

	static measurementUnitLengthId(correlationId, settings, measurementUnitsId) {
		measurementUnitsId = !String.isNullOrEmpty(measurementUnitsId) ? measurementUnitsId : AppUtility.measurementUnitsId(correlationId, settings);
		return settings && settings.measurementUnits && settings.measurementUnits.length ? settings.measurementUnits.length
			: AppCommonConstants.MeasurementUnits[measurementUnitsId].length.default;
	}

	static measurementUnitVelocityId(correlationId, settings, measurementUnitsId) {
		measurementUnitsId = !String.isNullOrEmpty(measurementUnitsId) ? measurementUnitsId : AppUtility.measurementUnitsId(correlationId, settings);
		return settings && settings.measurementUnits && settings.measurementUnits.velocity ? settings.measurementUnits.velocity
			: AppCommonConstants.MeasurementUnits[measurementUnitsId].velocity.default;
	}

	static measurementUnitVolumeId(correlationId, settings, measurementUnitsId) {
		measurementUnitsId = !String.isNullOrEmpty(measurementUnitsId) ? measurementUnitsId : AppUtility.measurementUnitsId(correlationId, settings);
		return settings && settings.measurementUnits && settings.measurementUnits.volume ? settings.measurementUnits.volume
			: AppCommonConstants.MeasurementUnits[measurementUnitsId].volume.default;
	}

	static measurementUnitWeightId(correlationId, settings, measurementUnitsId) {
		measurementUnitsId = !String.isNullOrEmpty(measurementUnitsId) ? measurementUnitsId : AppUtility.measurementUnitsId(correlationId, settings);
		return settings && settings.measurementUnits && settings.measurementUnits.weight ? settings.measurementUnits.weight
			: AppCommonConstants.MeasurementUnits[measurementUnitsId].weight.default;
	}

	static measurementUnitsOptions() {
		return [ AppCommonConstants.MeasurementUnits.english.id, AppCommonConstants.MeasurementUnits.metrics.id ];
	}

	static userDisplayName(correlationId, user) {
		if (!user || !user.settings)
			return '';

		const settings = user.settings ? user.settings : null;
		const userName = settings && settings.gamerTag ? settings.gamerTag : user.external && user.external.name ? user.external.name : '******';
		return userName;
	}

	static ttlDelta(ttl) {
		const now = LibraryCommonUtility.getTimestamp();
		const delta = ttl - now;
		return delta > 0;
	}

	static _injector = null;
	static set injector(value) {
		AppUtility._injector = value;
	}

	static get injector() {
		return AppUtility._injector;
	}
}

export default AppUtility;
