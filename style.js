async function hello() {
    let [fileHandle] = await window.showOpenFilePicker();
    console.log(fileHandle);
    let fileData = await fileHandle.getFile();
    console.log(fileData);
}
const btn = document.querySelector("button");
btn.addEventListener("click", hello);