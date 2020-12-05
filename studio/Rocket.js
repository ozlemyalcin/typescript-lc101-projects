"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        for (var i = 0; i < DataTransferItemList.length; i++) {
            this.totalCapacityKg += items[i];
        }
        return this.totalCapacityKg;
    };
    return Rocket;
}());
exports.Rocket = Rocket;
