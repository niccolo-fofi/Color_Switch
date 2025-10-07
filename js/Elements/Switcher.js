export class Switcher {
    constructor(x, y, raggio) {
        this.x = x;
        this.y = y;
        this.raggio = raggio;
        this.colors = ["red", "rgb(0,255,255)", "yellow"]; // i tre colori dei settori
    }

    draw(ctx) {
        const sliceAngle = (2 * Math.PI) / this.colors.length; // ogni fetta = 120°

        for (let i = 0; i < this.colors.length; i++) {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.arc(
                this.x,
                this.y,
                this.raggio,
                i * sliceAngle,
                (i + 1) * sliceAngle
            );
            ctx.closePath();
            ctx.fillStyle = this.colors[i];
            ctx.fill();
        }
    }

    nextColor(currentColor) {
        const index = this.colors.indexOf(currentColor);
        return this.colors[(index + 1) % this.colors.length];
    }
}