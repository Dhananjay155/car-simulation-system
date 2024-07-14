class Car {
    constructor(name, accelerationPower, brakingPower, maxFuelCapacity) {
      this.name = name;
      this.accelerationPower = accelerationPower;
      this.brakingPower = brakingPower;
      this.speed = 0;
      this.fuel = maxFuelCapacity;
      this.maxFuelCapacity = maxFuelCapacity;
    }
  
    accelerate() {
      if (this.fuel > 0) {
        this.speed += this.accelerationPower;
        this.fuel -= 1;
        console.log(`Accelerating: Speed is now ${this.speed} m/s, Fuel level: ${this.fuel}`);
      } else {
        console.log("Cannot accelerate: Out of fuel");
      }
    }
  
    brake() {
      this.speed -= this.brakingPower;
      if (this.speed < 0) {
        this.speed = 0;
      }
      console.log(`Brakes applied: Speed is now ${this.speed} m/s`);
    }
  
    checkSpeed() {
      return this.speed;
    }
  
    refuel() {
      this.fuel = this.maxFuelCapacity;
      console.log("Refueled to maximum capacity");
    }
  
    drive(duration) {
      console.log(`Starting drive for ${duration} seconds`);
      let intervalId = setInterval(() => {
        if (this.fuel > 0 && duration > 0) {
          this.accelerate();
          duration -= 1;
        } else {
          this.brake();
          if (duration <= 0 || this.fuel <= 0) {
            clearInterval(intervalId);
            console.log("Drive session ended");
          }
        }
      }, 1000);
    }
  }
  
  // Usage Example
  let myCar = new Car("Toyota", 10, 5, 100);
  
  console.log(`Initial speed: ${myCar.checkSpeed()} m/s`);
  myCar.accelerate();
  myCar.brake();
  myCar.refuel();
  myCar.drive(10);
  