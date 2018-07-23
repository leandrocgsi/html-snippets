var date = new Date("19/07/2018".replace( /(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3"))

<span id="invoiceLine">03399.63290 64000.000006 00125.201020 4 56140000017832</span>
<br>
<button id="copy_button">Copiar</button>
<br>

<script type="text/javascript">
    document.getElementById("copy_button").addEventListener("click", copy_password);

    function copy_password() {
        var copyText = document.getElementById("invoiceLine");
        var textArea = document.createElement("textarea");
        textArea.value = copyText.textContent;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("Copy");
        textArea.remove();
    }
</script>
