 function realizarAnalisis() {
            var inputText = document.getElementById("inputText").value;
            var mayusculasCount = 0;
            var minusculasCount = 0;
            var totalLetrasCount = 0;
            var totalPalabrasCount = 0;
            var numerosCount = 0;
            var especialesCount = 0;
            var saltosDeLineaCount = 0;
            var unicosCount = 0;

            // Contar mayúsculas, minúsculas, letras totales, palabras, números, caracteres especiales, saltos de línea
            for (var i = 0; i < inputText.length; i++) {
                var currentChar = inputText.charAt(i);

                if (currentChar >= 'A' && currentChar <= 'Z') {
                    mayusculasCount++;
                    totalLetrasCount++;
                } else if (currentChar >= 'a' && currentChar <= 'z') {
                    minusculasCount++;
                    totalLetrasCount++;
                } else if (/\d/.test(currentChar)) {
                    numerosCount++;
                } else if (/[^a-zA-Z\d\s]/.test(currentChar)) {
                    especialesCount++;
                }

                if (currentChar === '\n') {
                    saltosDeLineaCount++;
                }
            }

            // Contar palabras
            var palabras = inputText.split(/\s+/);
            totalPalabrasCount = palabras.length;

            // Contar caracteres únicos
            var caracteresUnicos = new Set(inputText.split(''));
            unicosCount = caracteresUnicos.size;

            // Mostrar texto revertido
            var textoRevertido = inputText.split('').reverse().join('');

            // Actualizar los contadores en la interfaz
            document.getElementById("mayusculasCount").textContent = mayusculasCount;
            document.getElementById("minusculasCount").textContent = minusculasCount;
            document.getElementById("totalLetrasCount").textContent = totalLetrasCount;
            document.getElementById("totalPalabrasCount").textContent = totalPalabrasCount;
            document.getElementById("numerosCount").textContent = numerosCount;
            document.getElementById("especialesCount").textContent = especialesCount;
            document.getElementById("saltosDeLineaCount").textContent = saltosDeLineaCount;
            document.getElementById("unicosCount").textContent = unicosCount;
            document.getElementById("revertidoText").textContent = textoRevertido;
        }