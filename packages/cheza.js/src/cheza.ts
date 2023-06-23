import pkg from '../package.json'
import type { ChezaDataStore, ChezaPlugin, ConstructedChezaPlugin } from '../types'
import { ChezaCanPlayTypes } from './ChezaCanPlayTypes'
import { canPlayType } from './canPlayType'
import { createHTML } from './createHTML'
import { prefillDataStore } from './prefillDataStore'

const registeredPlugins = new Map()

class Cheza {
  static Version = pkg.version

  private readonly _dataStore: ChezaDataStore

  public static canPlayType = canPlayType

  public static CanPlayTypes = ChezaCanPlayTypes

  public static registerPlugin = (plugin: typeof ChezaPlugin): boolean => {
    if (registeredPlugins.has(plugin.Name)) return false
    registeredPlugins.set(plugin.Name, plugin)
    return true
  }

  public static unregisterPlugin = (pluginName: string): boolean => {
    if (!registeredPlugins.has(pluginName)) return false
    registeredPlugins.delete(pluginName)
    return true
  }

  constructor (videoElement: HTMLVideoElement) {
    this._dataStore = prefillDataStore(videoElement)
    videoElement.removeAttribute('controls')
    createHTML(this._dataStore)
  }

  getDataStore = (): ChezaDataStore => this._dataStore

  addPlugin = (pluginName: string, opts?: any): boolean => {
    if (registeredPlugins.has(pluginName) && !this._dataStore.activePlugins.has(pluginName)) {
      const Plugin = registeredPlugins.get(pluginName) as typeof ChezaPlugin
      const plugin = new Plugin() as ConstructedChezaPlugin
      plugin.add(this._dataStore, opts)
      this._dataStore.activePlugins.set(pluginName, plugin)
      return true
    }
    return false
  }

  removePlugin = (pluginName: string, opts?: any): boolean => {
    if (registeredPlugins.has(pluginName) && this._dataStore.activePlugins.has(pluginName)) {
      const plugin = this._dataStore.activePlugins.get(pluginName) as ConstructedChezaPlugin
      plugin.remove(this._dataStore, opts)
      this._dataStore.activePlugins.delete(pluginName)
      return true
    }
    return false
  }

  getPlugin = (pluginName: string): ConstructedChezaPlugin | undefined => {
    if (this._dataStore.activePlugins.has(pluginName)) {
      return this._dataStore.activePlugins.get(pluginName) as ConstructedChezaPlugin
    }
    return undefined
  }
};

export { Cheza }
