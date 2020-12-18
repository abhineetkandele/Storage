const storageMap = {
  local: localStorage,
  session: sessionStorage
};

const createPromise = (func, isAsync) => {
  if (isAsync) {
    return new Promise((resolve, reject) => {
      resolve(func());
    });
  }
  return func();
};

class Storage {
  constructor(type = "local", { async }) {
    this.storageType = type;
    this.isAsync = async;
  }
  get(key) {
    return createPromise(
      () => JSON.parse(storageMap[this.storageType].getItem(key)),
      this.isAsync
    );
  }
  set(key, value) {
    return createPromise(
      () => storageMap[this.storageType].setItem(key, JSON.stringify(value)),
      this.isAsync
    );
  }
  delete(key) {
    return createPromise(
      () => storageMap[this.storageType].removeItem(key),
      this.isAsync
    );
  }
}

export default Storage;
