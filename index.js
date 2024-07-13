document.addEventListener("DOMContentLoaded", function () {

    const pdfUrl = 'images/bahaa-yassine.pdf';
    const iframe = document.getElementById('pdfIframe');
    pdfjsLib.getDocument(pdfUrl).promise.then(function(pdf) {
  
        pdf.getPage(1).then(function(page) {
            const scale = 1.5;
            const viewport = page.getViewport({ scale: scale });

            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width+27;

            const renderContext = {
                canvasContext: context,
                viewport: viewport
            };
            page.render(renderContext).promise.then(function() {

                const dataUrl = canvas.toDataURL();
                iframe.src = dataUrl;
                iframe.style.height = canvas.height+5 + 'px';
                
            });
        });

    });

});