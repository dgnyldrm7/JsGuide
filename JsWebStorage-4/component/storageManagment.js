export class StorageManagment {

    AddLocalStorage(key, value) {
        localStorage.setItem(key, value);
    }

    GetLocalStorage(key) {
        return localStorage.getItem(key);
    }

    RemoveLocalStorage(key) {
        localStorage.removeItem(key);
    }

    ClearAllLocalStorage() {
        localStorage.clear();
    }
}
