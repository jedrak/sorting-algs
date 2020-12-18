import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;
  private x: number;
  private ctx: CanvasRenderingContext2D;

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(0, 0, 50, 50);

    setInterval(()=> {
      this.ctx.clearRect(0, 0, 600, 300);
      this.ctx.fillStyle = 'red';
      this.ctx.fillRect(this.x, 0, 50, 50);
      console.log(this.x);
    }, 200);
  }

  animate(): void {}
}
