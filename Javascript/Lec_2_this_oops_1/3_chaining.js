let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function () {
        console.log(this.step);
        return this;
    }
};

// up fn oon ladder
// ladder.up();
// up fn on ladder
// ladder.up();

// ladder.up();
// ladder.down();
// ladder.showStep();

// ladder.up().up().up().down().showStep();
