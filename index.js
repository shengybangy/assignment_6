import inquirer from 'inquirer';
import qr from 'qr-image';
import { createWriteStream, writeFile } from 'fs';

inquirer.prompt([{
    message: "Please enter a link that you'd like to convert into a QR code",
    name: "link",
}]).then((answers) => {
    const url = answers.link; 
    console.log(url);
    const qr_png = qr.image(url, { type: 'png' });
    qr_png.pipe(createWriteStream("qr_code.png"));

    writeFile("URL.txt", url, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
    });
}).catch((error) => {
    if (error.isTtyError) {
        console.log("TTY error occurred");
    } else {
        console.error("Error occurred:", error);
    }
});









