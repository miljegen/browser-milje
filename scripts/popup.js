document.getElementById('uploadButton').addEventListener('click', async () => {
    const miljeInput = document.getElementById('fileInput');
    const milje = miljeInput.files[0];

    if(!milje) {
        alert("Please select a milje.");
        return;
    }

    const base64Milje = await convertImageToBase64(milje);
    await saveImage(base64Milje);
    await displayImage(base64Milje);
})