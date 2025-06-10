class LocalStorage {
  static storage: Storage = localStorage;

  static set(key: string, value: string): void {
    LocalStorage.storage.setItem(key, value);
  }

  static get(key: string): string | null {
    return LocalStorage.storage.getItem(key);
  }

  static remove(key: string): void {
    LocalStorage.storage.removeItem(key);
  }
}

export default LocalStorage;
