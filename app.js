import AppCommonConstants from 'rocket_sidekick_common/constants';
import AppSharedConstants from '@/utility/constants';
import LibraryClientConstants from '@thzero/library_client/constants.js';

import LibraryClientUtility from '@thzero/library_client/utility/index';
import LibraryMomentUtility from '@thzero/library_common/utility/moment';

import SettingsUser from 'rocket_sidekick_common/data/settingsUser';

class AppUtility {
	static isDebug = false;

	static address(address) {
		if (!address)
			return '';

		let temp = '';
		if (address) {
			if (!String.isNullOrEmpty(address.city))
				temp += address.city;
			if (!String.isNullOrEmpty(temp))
				temp += ', ';
			if (!String.isNullOrEmpty(address.stateProvince))
				temp += address.stateProvince;
			if (!String.isNullOrEmpty(temp))
				temp += ' ';
			if (!String.isNullOrEmpty(address.country))
				temp += address.country;
		}
		return temp;
	}

	static initializeSettingsUser() {
		const settings = new SettingsUser();
		settings.measurementUnits = {
			id: AppCommonConstants.MeasurementUnits.english.id
		};
		settings.measurementUnits.id = AppCommonConstants.MeasurementUnits.english.id;
		settings.measurementUnits.acceleration = AppCommonConstants.MeasurementUnits.english.acceleration.default;
		settings.measurementUnits.area = AppCommonConstants.MeasurementUnits.english.area.default;
		settings.measurementUnits.altitude = AppCommonConstants.MeasurementUnits.english.altitude.default;
		settings.measurementUnits.distance = AppCommonConstants.MeasurementUnits.english.distance.default;
		settings.measurementUnits.length = AppCommonConstants.MeasurementUnits.english.length.default;
		settings.measurementUnits.temperature = AppCommonConstants.MeasurementUnits.english.temperature.default;
		settings.measurementUnits.velocity = AppCommonConstants.MeasurementUnits.english.velocity.default;
		settings.measurementUnits.volume = AppCommonConstants.MeasurementUnits.english.volume.default;
		settings.measurementUnits.weight = AppCommonConstants.MeasurementUnits.english.weight.default;
		return settings;
	}

	static linkThrustCurve() {
		return `<a class="external" href="${AppSharedConstants.External.thrustCurve}" target="_blank">${LibraryClientUtility.$trans.t('menu.thrustcurve')}</a>`;
	}

	static measurementUnitsIdDefault(correlationId, settings) {
		return settings && settings.measurementUnits && settings.measurementUnits.id ? settings.measurementUnits.id : AppCommonConstants.MeasurementUnits.english.id;
	}

	static measurementUnits(correlationId, settings) {
		return AppCommonConstants.MeasurementUnits[AppUtility.measurementUnitsIdDefault(correlationId, settings)];
	}

	static measurementUnitAccelerationId(correlationId, settings, measurementUnitsId) {
		measurementUnitsId = !String.isNullOrEmpty(measurementUnitsId) ? measurementUnitsId : AppUtility.measurementUnitsIdDefault(correlationId, settings);
		return settings && settings.measurementUnits && (settings.measurementUnits.id === measurementUnitsId) && settings.measurementUnits.acceleration ? settings.measurementUnits.acceleration
			: AppCommonConstants.MeasurementUnits[measurementUnitsId].acceleration.default;
	}

	static measurementUnitAreaId(correlationId, settings, measurementUnitsId) {
		measurementUnitsId = !String.isNullOrEmpty(measurementUnitsId) ? measurementUnitsId : AppUtility.measurementUnitsIdDefault(correlationId, settings);
		return settings && settings.measurementUnits && (settings.measurementUnits.id === measurementUnitsId) && settings.measurementUnits.area ? settings.measurementUnits.area
			: AppCommonConstants.MeasurementUnits[measurementUnitsId].area.default;
	}

	static measurementUnitAltitudeId(correlationId, settings, measurementUnitsId) {
		measurementUnitsId = !String.isNullOrEmpty(measurementUnitsId) ? measurementUnitsId : AppUtility.measurementUnitsIdDefault(correlationId, settings);
		return settings && settings.measurementUnits && (settings.measurementUnits.id === measurementUnitsId) && settings.measurementUnits.altitude ? settings.measurementUnits.altitude
			: AppCommonConstants.MeasurementUnits[measurementUnitsId].altitude.default;
	}

	static measurementUnitDensityId(correlationId, settings, measurementUnitsId) {
		measurementUnitsId = !String.isNullOrEmpty(measurementUnitsId) ? measurementUnitsId : AppUtility.measurementUnitsIdDefault(correlationId, settings);
		return settings && settings.measurementUnits && (settings.measurementUnits.id === measurementUnitsId) && settings.measurementUnits.density ? settings.measurementUnits.density
			: AppCommonConstants.MeasurementUnits[measurementUnitsId].density.default;
	}

	static measurementUnitDistanceId(correlationId, settings, measurementUnitsId) {
		measurementUnitsId = !String.isNullOrEmpty(measurementUnitsId) ? measurementUnitsId : AppUtility.measurementUnitsIdDefault(correlationId, settings);
		return settings && settings.measurementUnits && (settings.measurementUnits.id === measurementUnitsId) && settings.measurementUnits.distance ? settings.measurementUnits.distance
			: AppCommonConstants.MeasurementUnits[measurementUnitsId].distance.default;
	}

	static measurementUnitFluidId(correlationId, settings, measurementUnitsId) {
		measurementUnitsId = !String.isNullOrEmpty(measurementUnitsId) ? measurementUnitsId : AppUtility.measurementUnitsIdDefault(correlationId, settings);
		return settings && settings.measurementUnits && (settings.measurementUnits.id === measurementUnitsId) && settings.measurementUnits.fluid ? settings.measurementUnits.fluid
			: AppCommonConstants.MeasurementUnits[measurementUnitsId].fluid.default;
	}

	static measurementUnitLengthId(correlationId, settings, measurementUnitsId) {
		measurementUnitsId = !String.isNullOrEmpty(measurementUnitsId) ? measurementUnitsId : AppUtility.measurementUnitsIdDefault(correlationId, settings);
		return settings && settings.measurementUnits && (settings.measurementUnits.id === measurementUnitsId) && settings.measurementUnits.length ? settings.measurementUnits.length
			: AppCommonConstants.MeasurementUnits[measurementUnitsId].length.default;
	}

	static measurementUnitTemperatureId(correlationId, settings, measurementUnitsId) {
		measurementUnitsId = !String.isNullOrEmpty(measurementUnitsId) ? measurementUnitsId : AppUtility.measurementUnitsIdDefault(correlationId, settings);
		return settings && settings.measurementUnits && (settings.measurementUnits.id === measurementUnitsId) && settings.measurementUnits.temperature ? settings.measurementUnits.temperature
			: AppCommonConstants.MeasurementUnits[measurementUnitsId].temperature.default;
	}

	static measurementUnitVelocityId(correlationId, settings, measurementUnitsId) {
		measurementUnitsId = !String.isNullOrEmpty(measurementUnitsId) ? measurementUnitsId : AppUtility.measurementUnitsIdDefault(correlationId, settings);
		return settings && settings.measurementUnits && (settings.measurementUnits.id === measurementUnitsId) && settings.measurementUnits.velocity ? settings.measurementUnits.velocity
			: AppCommonConstants.MeasurementUnits[measurementUnitsId].velocity.default;
	}

	static measurementUnitVolumeId(correlationId, settings, measurementUnitsId) {
		measurementUnitsId = !String.isNullOrEmpty(measurementUnitsId) ? measurementUnitsId : AppUtility.measurementUnitsIdDefault(correlationId, settings);
		return settings && settings.measurementUnits && (settings.measurementUnits.id === measurementUnitsId) && settings.measurementUnits.volume ? settings.measurementUnits.volume
			: AppCommonConstants.MeasurementUnits[measurementUnitsId].volume.default;
	}

	static measurementUnitWeightId(correlationId, settings, measurementUnitsId) {
		measurementUnitsId = !String.isNullOrEmpty(measurementUnitsId) ? measurementUnitsId : AppUtility.measurementUnitsIdDefault(correlationId, settings);
		return settings && settings.measurementUnits && (settings.measurementUnits.id === measurementUnitsId) && settings.measurementUnits.weight ? settings.measurementUnits.weight
			: AppCommonConstants.MeasurementUnits[measurementUnitsId].weight.default;
	}

	static measurementUnitsOptions() {
		return [ AppCommonConstants.MeasurementUnits.english.id, AppCommonConstants.MeasurementUnits.metrics.id ];
	}

	static measurementUnitTranslate(correlationId, measurementUnitsId, measurementUnitId, measurementUnitType) {
		if (String.isNullOrEmpty(measurementUnitsId) || String.isNullOrEmpty(measurementUnitId))
			return '';
		return LibraryClientUtility.$trans.t('measurementUnits.' + measurementUnitsId + '.' + measurementUnitType + '.' + measurementUnitId + 'Abbr');
	}

	static measurementUnitTranslateAcceleration(correlationId, measurementUnitsId, measurementUnitId) {
		return AppUtility.measurementUnitTranslate(correlationId, measurementUnitsId, measurementUnitId, AppCommonConstants.MeasurementUnits.acceleration.id);
	}

	static measurementUnitTranslateArea(correlationId, measurementUnitsId, measurementUnitId) {
		return AppUtility.measurementUnitTranslate(correlationId, measurementUnitsId, measurementUnitId, AppCommonConstants.MeasurementUnits.area.id);
	}

	static measurementUnitTranslateAltitude(correlationId, measurementUnitsId, measurementUnitId) {
		return AppUtility.measurementUnitTranslate(correlationId, measurementUnitsId, measurementUnitId, AppCommonConstants.MeasurementUnits.altitude.id);
	}
	
	static measurementUnitTranslateDensity(correlationId, measurementUnitsId, measurementUnitId) {
		return AppUtility.measurementUnitTranslate(correlationId, measurementUnitsId, measurementUnitId, AppCommonConstants.MeasurementUnits.density.id);
	}
	
	static measurementUnitTranslateDistance(correlationId, measurementUnitsId, measurementUnitId) {
		return AppUtility.measurementUnitTranslate(correlationId, measurementUnitsId, measurementUnitId, AppCommonConstants.MeasurementUnits.distance.id);
	}
	
	static measurementUnitTranslateFluid(correlationId, measurementUnitsId, measurementUnitId) {
		return AppUtility.measurementUnitTranslate(correlationId, measurementUnitsId, measurementUnitId, AppCommonConstants.MeasurementUnits.fluid.id);
	}

	static measurementUnitTranslateLength(correlationId, measurementUnitsId, measurementUnitId) {
		return AppUtility.measurementUnitTranslate(correlationId, measurementUnitsId, measurementUnitId, AppCommonConstants.MeasurementUnits.length.id);
	}

	static measurementUnitTranslateTemperature(correlationId, measurementUnitsId, measurementUnitId) {
		return AppUtility.measurementUnitTranslate(correlationId, measurementUnitsId, measurementUnitId, AppCommonConstants.MeasurementUnits.temperature.id);
	}

	static measurementUnitTranslateVelocity(correlationId, measurementUnitsId, measurementUnitId) {
		return AppUtility.measurementUnitTranslate(correlationId, measurementUnitsId, measurementUnitId, AppCommonConstants.MeasurementUnits.velocity.id);
	}

	static measurementUnitTranslateVolume(correlationId, measurementUnitsId, measurementUnitId) {
		return AppUtility.measurementUnitTranslate(correlationId, measurementUnitsId, measurementUnitId, AppCommonConstants.MeasurementUnits.volume.id);
	}
	
	static measurementUnitTranslateWeight(correlationId, measurementUnitsId, measurementUnitId) {
		return AppUtility.measurementUnitTranslate(correlationId, measurementUnitsId, measurementUnitId, AppCommonConstants.MeasurementUnits.weight.id);
	}

	static ttlDelta(ttl) {
		const now = LibraryMomentUtility.getTimestamp();
		const delta = now - ttl;
		return delta < 0;
	}

	static usageMetricsMeasurementTag(correlationId, tag) {
		(async () => {
			const serviceUsageMetrics = LibraryClientUtility.$injector.getService(LibraryClientConstants.InjectorKeys.SERVICE_USAGE_METRICS);
			await serviceUsageMetrics.tag(correlationId, tag);
		})();
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
