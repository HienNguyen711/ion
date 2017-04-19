'use strict';

var Event = require('../models/event');
 
exports.getEvents = function(req, res, next){
 
    Event.find(function(err, events) {
 
        if (err){
            res.send(err);
        }
 
        res.json(events);
 
    });
 
}
 
exports.createEvent = function(req, res, next){
 
    Event.create({
        title : req.body.title,
        description:req.body.description,
        location:req.body.location

    }, function(err, event) {
 
        if (err){
            res.send(err);
        }
 
        Event.find(function(err, events) {
 
            if (err){
                res.send(err);
            }
 
            res.json(events);
 
        });
 
    });
 
}
 
exports.deleteEvent = function(req, res, next){
 
    Event.remove({
        _id : req.params.event_id
    }, function(err, event) {
        res.json(event);
    });
 
}