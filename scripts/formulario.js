document.addEventListener('DOMContentLoaded', function() {
    // Itens da cozinha
    const itensCozinha = [
        'Mesa',
        'Armário Aéreo',
        'Balcão de Pia',
        'Pia Inox',
        'Estante',
        'Prateleiras',
        'Mesa',
        'Cadeira',
        'Geladeira',
        'Fogão',
        'Micro-Ondas',
        'Ar-Condicionado',
        'Depurador de Gordura',
        'Fritadeira'
    ];

    // Itens do quarto e banheiro
    const itensQuartoBanheiro = [
        'Cama Box',
        'Colchão',
        'Roupeiro',
        'Escrivania',
        'Abajur',
        'Criado Mudo',
        'Armário Pequeno',
        'Cadeira',
        'Sofá 2 Lugares',
        'Sofá 3 Lugares',
        'Televisor 60 Polegadas',
        'Televisor 42 Polegadas',
        'Televisor 29 Polegadas ou Menor',
        'Painel de TV',
        'Poltrona'
    ];

    // Itens da sala de estar
    const itensSalaEstar = [
        'Sofá 3 Lugares',
        'Sofá 2 Lugares',
        'Mesa Tampo de Vidro',
        'Mesa de Madeira'
    ];

    const selectElementCozinha = document.getElementById('itemSelectCozinha');
    const listaItensCozinha = document.getElementById('listaItensCozinha');
    const perguntaAdicional = document.getElementById('perguntaAdicional');
    const botaoSim = document.getElementById('botaoSim');
    const botaoNao = document.getElementById('botaoNao');
    const escolhaAmbiente = document.getElementById('escolhaAmbiente');
    const botaoSalaEstar = document.getElementById('botaoSalaEstar');
    const botaoQuartoBanheiro = document.getElementById('botaoQuartoBanheiro');
    const formSalaEstar = document.getElementById('formSalaEstar');
    const formQuartoBanheiro = document.getElementById('formQuartoBanheiro');
    const selectElementSalaEstar = document.getElementById('itemSelectSalaEstar');
    const listaItensSalaEstar = document.getElementById('listaItensSalaEstar');
    const selectElementQuartoBanheiro = document.getElementById('itemSelectQuartoBanheiro');
    const listaItensQuartoBanheiro = document.getElementById('listaItensQuartoBanheiro');

    // Função para adicionar opções no select
    function adicionarOpcoes(itens, selectElement) {
        itens.forEach(function(item) {
            const option = document.createElement('option');
            option.value = item.toLowerCase().replace(/ /g, '-');
            option.text = item;
            selectElement.appendChild(option);
        });
    }

    // Adicionar itens da cozinha no select
    adicionarOpcoes(itensCozinha, selectElementCozinha);

    // Adicionar itens do quarto e banheiro no select
    adicionarOpcoes(itensQuartoBanheiro, selectElementQuartoBanheiro);

    // Adicionar itens da sala de estar no select
    adicionarOpcoes(itensSalaEstar, selectElementSalaEstar);

    // Função para adicionar item na lista com botão de excluir
    function adicionarItemNaLista(selectElement, listaElement) {
        const selectedItem = selectElement.options[selectElement.selectedIndex].text;
        const listItem = document.createElement('li');
        listItem.textContent = selectedItem;

        const botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = 'Excluir';
        botaoExcluir.style.marginLeft = '10px';

        botaoExcluir.addEventListener('click', function() {
            listaElement.removeChild(listItem);
        });

        listItem.appendChild(botaoExcluir);
        listaElement.appendChild(listItem);
    }

    // Evento de clique no botão "Enviar" da cozinha
    document.getElementById('submitButtonCozinha').addEventListener('click', function() {
        adicionarItemNaLista(selectElementCozinha, listaItensCozinha);
        perguntaAdicional.style.display = 'block';
        botaoSim.style.display = 'inline-block';
        botaoNao.style.display = 'inline-block';
    });

    // Evento de clique no botão "Sim" para mostrar a escolha de ambiente
    botaoSim.addEventListener('click', function() {
        escolhaAmbiente.style.display = 'block';
        perguntaAdicional.style.display = 'none';
        botaoSim.style.display = 'none';
        botaoNao.style.display = 'none';
    });

    // Evento de clique no botão "Não" para esconder os botões e pergunta
    botaoNao.addEventListener('click', function() {
        perguntaAdicional.style.display = 'none';
        botaoSim.style.display = 'none';
        botaoNao.style.display = 'none';
    });

    // Evento de clique no botão "Sala de Estar" para mostrar o formulário da sala de estar
    botaoSalaEstar.addEventListener('click', function() {
        formSalaEstar.style.display = 'block';
        escolhaAmbiente.style.display = 'none';
    });

    // Evento de clique no botão "Quarto e Banheiro" para mostrar o formulário de quarto e banheiro
    botaoQuartoBanheiro.addEventListener('click', function() {
        formQuartoBanheiro.style.display = 'block';
        escolhaAmbiente.style.display = 'none';
    });

    // Evento de clique no botão "Enviar" da sala de estar
    document.getElementById('submitButtonSalaEstar').addEventListener('click', function() {
        adicionarItemNaLista(selectElementSalaEstar, listaItensSalaEstar);
    });

    // Evento de clique no botão "Enviar" do quarto e banheiro
    document.getElementById('submitButtonQuartoBanheiro').addEventListener('click', function() {
        adicionarItemNaLista(selectElementQuartoBanheiro, listaItensQuartoBanheiro);
    });
});