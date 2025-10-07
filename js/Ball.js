export class Ball {
    constructor(x, y, raggio, velocitaSalto) {
        this.x = x;
        this.y = y;
        this.raggio = raggio;
        this.velocitaY = 0;
        this.velocitaSalto = velocitaSalto;
        this.gravita = 0.4;
        this.attiva = false;
    }

    update(canvas) {
        if (!this.attiva) return;

        this.velocitaY += this.gravita;
        this.y += this.velocitaY;

        if (this.y + this.raggio > 800) {
            this.y = 800 - this.raggio;
            this.velocitaY = 0;
        }
    }

    jump() {
        this.attiva = true;
        this.velocitaY = -this.velocitaSalto;
    }

    draw(ctx) {
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.raggio, 0, Math.PI * 2);
        ctx.fill();
    }
}