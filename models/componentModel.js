const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const componentSchema = new Schema({
  datasheet: {
		type: 'String'
	},
	tech_specs: {
		type: [
			'Mixed'
		]
	},
	detailled_info: {
		type: 'String'
	},
	v_min: {
		type: 'Number'
	},
	io: {
		power: {
			type: [
				'Mixed'
			]
		},
		gates: {
			type: [
				'Mixed'
			]
		}
	},
	label: {
		type: 'String'
	},
	name: {
		type: 'String'
	},
	v_max: {
		type: 'Number'
	},
	categorie: {
		type: 'String'
	},
	i_min: {
		type: 'Number'
	},
	icon_text: {
		type: 'String'
	},
	power: {
		type: 'String'
	},
	states: {
		type: 'String'
	},
	i_max: {
		type: 'Number'
	},
	version_launch: {
		type: 'String'
	},
	uuid: {
		type: 'String'
	},
	details: {
		type: 'String'
	},
	power_specs: {
		type: [
			'Mixed'
		]
	},
	icon: {
		type: 'String'
	},
	type: {
		type: 'String'
	},
	vendor: {
		type: 'String'
	},
configuration_parameters: {
  type: [
    'Mixed'
  ]
}
});

module.exports = mongoose.model('Component', componentSchema);
