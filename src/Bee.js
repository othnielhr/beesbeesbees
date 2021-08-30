var Bee = function(age, color, food, job) {
  Grub.call(this, food);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

Bee.prototype = Object.create(Grub.prototype)
Bee.prototype.constructor = Bee;