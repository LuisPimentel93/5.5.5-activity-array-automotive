//this includes the vehicle class as a module
const VehicleModule = require("./vehicle.js")
class newVehicle extends VehicleModule.Vehicle{
    constructor(make, model, year, color, mileage, passengers, fuel, numberOfWheels, maximumPassengers, maximumSpeed, scheduleService){
        super(make, model, year, color, mileage)
        this.maximumPassengers = maximumPassengers
        this.passengers = passengers
        this.numberOfWheels = numberOfWheels
        this.maximumSpeed = maximumSpeed
        this.fuel = fuel
        this.scheduleService = scheduleService
    }
    loadPassenger(){
        
        console.log('load five passengers')
    }
    start(){
        if (this.fuel > 0) {
            console.log("engine started...!!!")
            return this.started = true;
            
    }}
    newService(){
        if(this.mileage > 30000){
            console.log('this vehicle needs service')
            return this.scheduleService = true
            
        }
    }
}



//this shows how to call from this module...
let v = new newVehicle("Mecury", "Sedan", "1965", "color", 35000, 2, 10, 4, 5, 200, false);
console.log(v)
v.newService()
v.start()
v.loadPassenger()
