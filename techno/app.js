const vm = new Vue({
    el: "#app",
    data: {
        produtos: [],
        produto: false,
        carrinho: [],
        mensagemAlerta: "Item adicionado",
        alertaAtivo: false
    },
    filters: {
        numeroPreco(valor) {
            return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
        }
    },
    computed: {
        carrinhoTotal() {
            let total = 0
            if (this.carrinho.length) {
                this.carrinho.forEach(item => {
                    total += item.preco
                })
            }
            return total
        }
    },
    methods: {
        fetchProdutos() {
            fetch("./api/produtos.json")
                .then(response => response.json())
                .then(json => this.produtos = json)
        },
        fetchProduto(id) {
            fetch(`./api/produtos/${id}/dados.json`)
                .then(response => response.json())
                .then(json => this.produto = json)
        },
        abrirModal(id) {
            this.fetchProduto(id)
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        },
        fecharModal({ target, currentTarget }) {
            if (target === currentTarget) this.produto = false;
        },
        adicionarItem() {
            this.produto.estoque--
            const { id, nome, preco } = this.produto //desestruturar
            this.carrinho.push({ id, nome, preco })
            this.alerta(`${nome} adicionado ao carrinho.`)
        },
        removerItem(index) {
            this.carrinho.splice(index, 1)
        },
        checarLocalStorage() {
            if (window.localStorage.carrinho) {
                this.carrinho = JSON.parse(window.localStorage.carrinho)
            }
        },
        alerta(mensagem) {
            this.mensagemAlerta = mensagem
            this.alertaAtivo = true
            setTimeout(() => {
                this.alertaAtivo = false
            }, 1500)
        }
    },
    watch: {
        carrinho(event) {
            console.log('event', event)
            window.localStorage.carrinho = JSON.stringify(this.carrinho);
        }
    },
    created() {
        this.fetchProdutos()
        this.checarLocalStorage()
    }
})