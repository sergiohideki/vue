const vm = new Vue({
    el: "#app",
    data: {
        produtos: [],
        produto: false
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
            console.log(target)
            console.log(currentTarget)
            if (target === currentTarget) this.produto = false;
        }
    },
    filters: {
        numeroPreco(valor) {
            return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
        }
    },
    created() {
        this.fetchProdutos()
    }
})