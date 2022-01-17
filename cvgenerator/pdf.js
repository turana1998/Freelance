window.onload = function () {
    document.getElementById("download")
        .addEventListener("click", () => {
            const invoice = document.getElementById("invoice");
            const invoice2 = document.getElementById("invoice2");
            console.log(invoice);
            console.log(window);
            var opt = {
                margin: 0,
                filename: 'myfile.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(invoice).set(opt).save();
            html2pdf().from(invoice2).set(opt).save();
        })
}