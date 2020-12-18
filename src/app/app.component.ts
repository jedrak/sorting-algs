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
    var counter = 0;
    setInterval(()=> {
      this.ctx.clearRect(0, 0, 600, 300);
      this.ctx.fillStyle = counter%2==0?'red':'green';

      this.ctx.fillRect(counter>300 ? 0:counter++, 0, 50, 50);
      console.log(this.x);
    }, 200);
  }

  animate(): void {}
}
