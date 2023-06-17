import { Cheza } from './cheza'
import type { ChezaPlugin } from '../types'
import { videoElementMock } from './videoElementMock'

const ExampleChezaPlugin: typeof ChezaPlugin = class {
  public static Name = 'ExampleChezaPlugin'
  public static Version = '0.0.1'

  constructor () {
    console.log('ExampleChezaPlugin.constructor()')
    return this
  }

  add = (dataStore: any, opts?: any): void => {
    console.log('ExampleChezaPlugin.add()', dataStore, opts)
  }

  remove = (dataStore: any, opts?: any): void => {
    console.log('ExampleChezaPlugin.remove()', dataStore, opts)
  }
}

const cheza = new Cheza(videoElementMock)

describe('Cheza', () => {
  it('should match the dataStore snapshot', () => {
    expect(cheza.getDataStore()).toMatchSnapshot()
  })

  it('should register a plugin', () => {
    const res = Cheza.registerPlugin(ExampleChezaPlugin)
    expect(res).toBe(true)
  })

  it('should fail to register a already registered plugin', () => {
    const res = Cheza.registerPlugin(ExampleChezaPlugin)
    expect(res).toBe(false)
  })

  it('should unregister a already registered plugin', () => {
    const res = Cheza.unregisterPlugin(ExampleChezaPlugin.Name)
    expect(res).toBe(true)
  })

  it('should fail to unregister a already unregistered plugin', () => {
    const res = Cheza.unregisterPlugin(ExampleChezaPlugin.Name)
    expect(res).toBe(false)
  })

  it('should fail to add a not registered plugin', () => {
    const res = cheza.addPlugin(ExampleChezaPlugin.Name)
    expect(res).toBe(false)
  })

  it('should fail to remove a not registered plugin', () => {
    const res = cheza.removePlugin(ExampleChezaPlugin.Name)
    expect(res).toBe(false)
  })

  it('should succeed to add a previously registered plugin', () => {
    Cheza.registerPlugin(ExampleChezaPlugin)
    const res = cheza.addPlugin(ExampleChezaPlugin.Name)
    expect(res).toBe(true)
  })

  it('should succeed to remove a previously registered and added plugin', () => {
    Cheza.registerPlugin(ExampleChezaPlugin)
    const res = cheza.removePlugin(ExampleChezaPlugin.Name)
    expect(res).toBe(true)
  })
})
