export interface Printer {
  ctx: CanvasRenderingContext2D
  RunningArray: Line[]
  LineArray: Line[],
  LineColor: string
  reset?(): void
  print?(printer: Printer): void
}

export function print(printer: Printer) {
  printer.ctx.lineWidth = 1.0;
  for (let i = 0; i < printer.LineArray.length; i++) {
    const line = printer.LineArray[i]
    printer.ctx.strokeStyle = line.color ?? printer.LineColor;
    printer.ctx.beginPath()
    printer.ctx.moveTo(line['start']![0], line['start']![1]);
    printer.ctx.lineTo(line['end']![0], line['end']![1]);
    printer.ctx.stroke();
    printer.ctx.closePath()
  }
}

export function createPrinter(instance: Instance): Printer {
  const printer = {
    ctx: instance.stage?.getContext('2d')!,
    RunningArray: [],
    LineArray: [],
    LineColor: '#f00',
    setData(pointArray: Point[]) {
      setData(instance.printer!, pointArray)
    },
    run() {
      run(instance.printer!)
    },
    reset() {
      reset(instance.printer!)
    },
  }
  instance.printer = printer
  return printer
}

function makeLines(pointArray: Point[]): Line[] {
  const lines: Line[] = []
  let line: Line = {}
  let i = 0
  while(i < pointArray.length) {
    if (!line.start) {
      line.start = pointArray[i]
      i++
      continue
    }
    if (!line.end) {
      line.end = pointArray[i]
      lines.push(line)
      line = {}
      continue
    }
  }
  return lines
}

export function setData(printer: Printer, pointArray: Point[]) {
  printer.LineArray = makeLines(pointArray)
}

export function run(printer: Printer) {
  print(printer)
}

function reset(printer: Printer) {
  printer.RunningArray = []
  printer.LineArray = []
  printer.LineColor = '#f00'
}

export function destroy(instance: Instance) {
  instance.printer = undefined
}