type Point = [number, number]

interface Line {
  start?: Point
  color?: string
  end?: Point
}

interface Printer {
  ctx: CanvasRenderingContext2D
  RunningArray: Line[]
  LineArray: Line[],
  LineColor: string
  reset?(): void
  print?(printer: Printer): void
}

interface Instance {
  container: HTMLDivElement | null,
  stage: HTMLCanvasElement | null,
  printer?: Printer,
}

