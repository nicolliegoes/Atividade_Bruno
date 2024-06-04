// Coletar endereço IP usando uma API externa
fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        console.log(`Seu endereço IP é: ${data.ip}`);
        const ipAddressElement = document.getElementById('ip-address');
        ipAddressElement.textContent = `Seu IP: ${data.ip}`;
    })
    .catch(error => console.error('Erro ao obter o endereço IP:', error));

    // Função para remover item do carrinho
document.querySelectorAll('.remove').forEach(button => {
    button.addEventListener('click', () => {
        button.parentElement.parentElement.remove();
        updateSubtotal();
    });
});

// Função para atualizar subtotal
document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('change', updateSubtotal);
});

function updateSubtotal() {
    let subtotal = 0;
    document.querySelectorAll('.cart-item').forEach(item => {
        const price = parseFloat(item.querySelector('.price').textContent.replace('R$ ', '').replace(',', '.'));
        const quantity = parseInt(item.querySelector('input').value);
        subtotal += price * quantity;
    });
    document.querySelector('.subtotal').textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
}

// Alerta ao clicar em "Finalizar Compra"
document.querySelector('.checkout').addEventListener('click', () => {
    alert('Atenção: Você caiu em um golpe! Este site é falso.');
});