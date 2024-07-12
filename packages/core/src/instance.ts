import { createContainer, destory as destoryContainer } from './container'
import { createPrinter, destroy as destroyPrinter } from './printer'

interface CreateParam {
  el: keyof HTMLElementTagNameMap
  width?: number
  height?: number
}

function createInstance(container: HTMLDivElement, stage: HTMLCanvasElement): Instance {
  return {
    container,
    stage,
  }
}

export function createLines(param: CreateParam): Instance | void {
  const width = param?.width
  const height = param?.height
  const [ container, stage ] = createContainer(param.el, width, height)
  if (container === null) {
    return
  }
  const instance = createInstance(container, stage as HTMLCanvasElement)
  createPrinter(instance)
  return instance
}

export function destory(instance: Instance) {
  destoryContainer(instance)
  destroyPrinter(instance)
}