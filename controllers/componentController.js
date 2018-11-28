const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const componentModel = require('../models/componentModel');

exports.getComponents = (req, res) => {
  Component.find(function(err, components) {
    if(err) res.send(err);
    res.json({components});
  });  
};

// POST Component
exports.createComponent = (req, res) => {
	const component = new Component();
	component.name = req.body.name;

	component.save(err => {
		if(err) {
			if (err.code == 11000)
				return res.json({ success: false, message: 'A Component with that\
				name already exists. '});
			else
				return res.send(err);
		}
		res.json({ message: 'Component created!' });
	});
};