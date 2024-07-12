import { error } from '@zline/shared'

function getContainerInfo(param: keyof HTMLElementTagNameMap) {
  const inputContainer = document.querySelector(param)
  // if dom not canvasElement, create canvasElement inside
  if (inputContainer === null) {
    return error('input must be div element, not null')
  }

  if (inputContainer.tagName !== 'DIV') {
    return error('target must be div element')
  }

  return inputContainer as HTMLDivElement
}

function createStage(width: number, height: number) {
  const stage = document.createElement('canvas')
  stage.setAttribute('width', width.toString())
  stage.setAttribute('height', height.toString())
  return stage
}

export function createContainer(param: keyof HTMLElementTagNameMap, width?: number, height?: number): [
  HTMLDivElement | null, HTMLCanvasElement | null
] {
  let container: null | HTMLDivElement = getContainerInfo(param)
  let stage : null | HTMLCanvasElement = null
  if (container !== null) {
    const stageWidth = width ?? container.clientWidth
    const stageHeight = height ?? container.clientHeight
    stage = createStage(stageWidth, stageHeight)
    container.appendChild(stage!)
  }
  return [ container, stage ]
}

export function destory(instance: Instance) {
  instance.container?.removeChild(instance.stage as HTMLCanvasElement)
  instance.container = null
  instance.stage = null
}