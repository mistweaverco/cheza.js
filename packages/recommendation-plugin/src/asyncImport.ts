export async function asyncImport (moduleName: string): Promise<any> {
  return await import(moduleName)
}
