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
const fileContents = fs.readFileSync('./dataComponent/component.json', 'utf8')
// console.log(fileContents)
try {
	const data = JSON.parse(fileContents);
// console.log(fileContents)
	for (let i = 0; i < data.data.length; i++) {
				const categorie = data.data[i];
				for (let j = 0; j < categorie.components.length; j++) {
					const fileComponent = categorie.components[j];
					// console.log(fileComponent.name)
					const component = new Component(fileComponent);	
					// console.log(fileComponent)
					component.save(err => {
					if(err) return console.log(err);
				})
				
				}}
} catch(err) {
  console.error(err)
}
