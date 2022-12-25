const filedrop = (f) =>{
    f.preventDefault();

    const file = f.dataTransfer.items[0].getAsFile()
    // console.log(document.querySelector('#file'));
    document.querySelector('#file').files[file]
    

    // if (f.dataTransfer.items) {
    //     // Use DataTransferItemList interface to access the file(s)
    //     [...f.dataTransfer.items].forEach((item, i) => {
    //       // If dropped items aren't files, reject them
    //       if (item.kind === 'file') {
    //         const file = item.getAsFile();
    //         console.log(`… file[${i}].name = ${file.name}`);
    //       }
    //     });
    //   } else {
    //     // Use DataTransfer interface to access the file(s)
    //     [...f.dataTransfer.files].forEach((file, i) => {
    //       console.log(`… file[${i}].name = ${file.name}`);
    //     });
    //   }
}
const fileDragOver = (f) =>{
    f.preventDefault();

    // console.log(f);
}

const formsubmit = (e) =>{
    e.preventDefault();
    console.log(e);
}