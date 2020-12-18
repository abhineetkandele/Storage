import storage from "./storage";
const Storage = new storage("local", { async: false });
Storage.set("abc", "dfsdf");
console.log(Storage.get("abc"));
console.log(Storage.delete("abc"));
