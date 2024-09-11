
        const form = document.getElementById('form');
        const provasList = document.getElementById('provas-list');
        const resumo = document.getElementById('resumo');
        let provas = [];

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const equipe = document.getElementById('equipe').value;
            const prova = document.getElementById('prova').value;
            const nota1 = parseFloat(document.getElementById('nota1').value);

            const provaData = {
                equipe,
                prova,
                nota1
            };

            provas.push(provaData);
            renderProvas();
            calcularResumo();
        });

        function renderProvas() {
            provasList.innerHTML = '';
            provas.forEach((prova, index) => {
                const li = document.createElement('li');
                li.textContent = `Equipe: ${prova.equipe}, Prova: ${prova.prova}, Nota: ${prova.nota1}`;
                provasList.appendChild(li);
            });
        }

        function calcularResumo() {
            const totalProvas = provas.length;
            let totalNotas = 0;

            provas.forEach(prova => {
                totalNotas += prova.nota1;
            });

            const media = (totalNotas / totalProvas).toFixed(2);
            resumo.textContent = `Total de Provas: ${totalProvas}, Média das Notas: ${media}`;
        }
