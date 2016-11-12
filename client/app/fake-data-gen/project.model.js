"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
;
var Project = (function () {
    function Project(id, name, launch_date, project_manager, budget) {
        this.id = id;
        this.name = name;
        this.launch_date = launch_date;
        this.project_manager = project_manager;
        this.budget = budget;
    }
    return Project;
}());
exports.Project = Project;
var projectMgrs = [
    'Tom Rundle',
    'Lana Plotkin',
    'Danny Marquez',
    'Abi Guarav',
    'Elon Musk',
    'Matthew Rundle',
    'Captain America',
    'Thor Erikson',
    'Johnny Rotten',
    'Bono',
    'Jude Law',
    'Warren Buffet',
    'Angela Merkel',
    'Lady Gaga',
    'Betty Yu',
    'Rachel Smith',
    'Kathy Smith',
    'Sizhan Shi'
];
var destinations = [
    'Mercury',
    'Venus',
    'Mars',
    'Moon',
    'Jupiter',
    'Saturn',
    'Neptune',
    'Uranus',
    'Pluto',
    'Interstellar',
    'Black Hole',
    'Deep Space',
    '5th Dimension',
    'Alpha Centauri'
];
var technologies = [
    'Rover',
    'Lander',
    'Teleporter',
    'Gateway',
    'Probe',
    'Space Station',
    'Colony',
    'Military Installation',
    'Superstructure',
    'Capsule',
    'Colony Ship',
    'Frigate'
];
var ExampleProject = (function (_super) {
    __extends(ExampleProject, _super);
    function ExampleProject() {
        _super.call(this, idTracker.add(), defineMission(destinations, technologies), genRandomDate(), assignPersonnel(projectMgrs), getBillions());
        this.spend = consultOracle() ?
            estimator.paintPrettyPicture(this.budget) :
            estimator.tellLikeIs(this.budget);
        this.percent_budget_spent = this.spend / this.budget;
    }
    return ExampleProject;
}(Project));
exports.ExampleProject = ExampleProject;
var idTracker = {
    nextId: 151,
    add: function () {
        var id = this.nextId;
        this.nextId++;
        return id;
    }
};
var estimator = {
    paintPrettyPicture: function (budget) {
        return genRandom(0, 25) / 100 * budget;
    },
    tellLikeIs: function (budget) {
        return genRandom(25, 75) / 100 * budget;
    }
};
function genRandomDate() {
    return new Date(getRandomYear(), getRandomMonth());
}
function getRandomYear() {
    return genRandom(2020, 2100);
}
function getRandomMonth() {
    return genRandom(0, 11);
}
function genRandom(min, max) {
    return Math.random() * (max - min) + min;
}
function getBillions() {
    var billion = 1000000000, tenK = 10000;
    return genRandom(billion, billion * tenK);
}
function assignPersonnel(list) {
    var idx = Math.round(genRandom(0, list.length - 1));
    return list[idx];
}
function defineMission(dest, tech) {
    var dIdx, tIdx;
    dIdx = Math.round(genRandom(0, dest.length - 1));
    tIdx = Math.round(genRandom(0, tech.length - 1));
    return dest[dIdx] + ' ' + tech[tIdx];
}
function consultOracle() {
    var coinTossResult = Math.round(Math.random());
    if (coinTossResult === 1) {
        return true;
    }
    return false;
}
var ProjectFormat = (function () {
    function ProjectFormat(id, name, launch_date, project_manager, budget, spend, percent_budget_spent) {
        if (id === void 0) { id = null; }
        if (name === void 0) { name = null; }
        if (launch_date === void 0) { launch_date = null; }
        if (project_manager === void 0) { project_manager = null; }
        if (budget === void 0) { budget = null; }
        if (spend === void 0) { spend = null; }
        if (percent_budget_spent === void 0) { percent_budget_spent = null; }
        this.id = id;
        this.name = name;
        this.launch_date = launch_date;
        this.project_manager = project_manager;
        this.budget = budget;
        this.spend = spend;
        this.percent_budget_spent = percent_budget_spent;
    }
    return ProjectFormat;
}());
exports.ProjectFormat = ProjectFormat;
//# sourceMappingURL=project.model.js.map