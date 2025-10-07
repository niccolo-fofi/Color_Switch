export class Triangle {
    constructor(x, y, raggio, velocitaRotazione) {
        this.x = x;
        this.y = y;
        this.raggio = raggio;
        this.angolo = 0;
        this.velocitaRotazione = 0.01;

        this.color1 = "red";
        this.color2 = "rgb(0, 255, 255)";
        this.color3 = "yellow";
    }
    draw(ctx) {
        ctx.save(); // salva lo stato del contesto
        ctx.translate(this.x, this.y); // sposta l'origine al centro del triangolo
        ctx.rotate(this.angolo); // applica la rotazione

        const r = this.raggio;
        const punti = [
            { x: 0, y: -r },
            { x: r * Math.sin(Math.PI / 3), y: r * Math.cos(Math.PI / 3) },
            { x: -r * Math.sin(Math.PI / 3), y: r * Math.cos(Math.PI / 3) }
        ];

        // lato 1
        ctx.beginPath();
        ctx.moveTo(punti[0].x, punti[0].y);
        ctx.lineTo(punti[1].x, punti[1].y);
        ctx.strokeStyle = this.color1;
        ctx.lineWidth = 8;
        ctx.stroke();

        // lato 2
        ctx.beginPath();
        ctx.moveTo(punti[1].x, punti[1].y);
        ctx.lineTo(punti[2].x, punti[2].y);
        ctx.strokeStyle = this.color2;
        ctx.stroke();

        // lato 3
        ctx.beginPath();
        ctx.moveTo(punti[2].x, punti[2].y);
        ctx.lineTo(punti[0].x, punti[0].y);
        ctx.strokeStyle = this.color3;
        ctx.stroke();

        ctx.restore();
    }

    update() {
        this.angolo += this.velocitaRotazione;
    }
}