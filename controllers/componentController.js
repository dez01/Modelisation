const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');

const Component = require('../models/componentModel');

exports.getComponents = (req, res) => {
	Component.find(function (err, components) {
		if (err) res.send(err);
		res.json({
			components
		});
	});
};

// READ JSON
fs.readFile('./dataComponent/component.json', (err, data) => {
	if (err) throw err;
	let componentData = JSON.parse(data);
	//  console.log(data);
	//  console.log(componentData); /*categories*/
	//  console.log(componentData.data[1]);


	for (let i = 0; i < componentData.data.length; i++) {
		// console.log(componentData.data[i]);
		// for(let j in components) {
		// 	console.log()
		// }

	}
});

// POST Component
exports.createComponent = (req, res) => {
	const component = new Component(
		{
			datasheet : req.body.datasheet,
			tech_specs : req.body.tech_specs,
			detailled_info : req.body.detailled_info,
			v_min : req.body.v_min,
			io : req.body.io,
			label : req.body.label,
			v_max : req.body.v_max,
			categorie : req.body.categorie,
			i_min : req.body.i_min,
			icon_text : req.body.icon_text,
			power : req.body.power,
			states : req.body.states,
			i_max : req.body.i_max,
			version_launch : req.body.version_launch,
			uuid : req.body.uuid,
			details : req.body.details,
			power_specs : req.body.power_specs,
			icon : req.body.icon,
			type : req.body.type,
			vendor : req.body.vendor,
			configuration_parameters : req.body.configuration_parameters
		}
	);
	// component.datasheet = req.body.datasheet,
	// component.tech_specs = req.body.tech_specs,
	// component.	detailled_info = req.body.	detailled_info,
	// component.v_min = req.body.v_min,
	// component.io = req.body.io,
	// component.label = req.body.label,
	// component.v_max = req.body.v_max,
	// component.categorie = req.body.categorie,
	// component.i_min = req.body.i_min,
	// component.icon_text = req.body.icon_text,
	// component.power = req.body.power,
	// component.states = req.body.states,
	// component.i_max = req.body.i_max,
	// component.version_launch = req.body.version_launch,
	// component.uuid = req.body.uuid,
	// component.details = req.body.details,
	// component.power_specs = req.body.power_specs,
	// component.icon = req.body.icon,
	// component.type = req.body.type,
	// component.vendor = req.body.vendor,
	// component.configuration_parameters = req.body.configuration_parameters;
	component.save(err => {
		if (err) {
			if (err.code == 11000)
				return res.json({
					success: false,
					message: 'A Component with that\
				name already exists. '
				});
			else
				return res.send(err);
		}
		res.json({
			message: 'Component created!'
		});
	});
};
