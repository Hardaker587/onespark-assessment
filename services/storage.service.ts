export class StorageService {
  public setStorage(name: string, data: any) {
    if (typeof data === "object") data = JSON.stringify(data);
    localStorage.setItem(name, data);
  }
  public getStorage(name: string) {
    const data: string | null = localStorage.getItem(name);
    return JSON.parse(data ?? "");
  }
  public removeStorage(name: string) {
    localStorage.removeItem(name);
  }
}
