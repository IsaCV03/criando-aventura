const avanca = document.querySelectorAll('.btn-proximo');

avanca. forEach(button => {
     button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximaFasse = 'fase-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximaFasse).classList.add('ativo');
     })
})