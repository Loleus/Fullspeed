export default class Rnd {

    constructor(seed) {
        this.m = 0x80000000;
        this.a = 1103515245;
        this.c = 12345;
        this.state = seed ? seed : Math.floor(Math.random() * (this.m - 1));

        this.tracks = [10, 70, 130, 190, 250];
        this.speedys = [
            [-520, -320],
            [160, 260],
            [90, 180],
            [80, 120],
            [55, 95]
        ];
        this.loops = [
            [-1800, -400],
            [-600, -400],
            [-700, -500],
            [-400, -600],
            [-800, -350]
        ];
    }

    getSpeed(id) {
        return this.nextRange(this.speedys[id][0], this.speedys[id][1]);
    };

    getNumb(id) {
        return this.nextRange(this.loops[id][0], this.loops[id][1]);
    };
    nextInt() {
        this.state = (this.a * this.state + this.c) % this.m;

        return this.state;
    };

    nextFloat() {
        return this.nextInt() / (this.m - 1);
    };

    nextRange(start, end) {
        let rangeSize = end - start;
        let randomUnder1 = this.nextInt() / this.m;

        return start + Math.floor(randomUnder1 * rangeSize);
    };

    choice(array) {
        return array[this.nextRange(0, array.length)];
    };

};