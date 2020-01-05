const vm = new Vue({
    el: "#app",
    data: {
        produtos: []
    },
    methods: {
        fetchProdutos() {
            fetch("./api/produtos.json")
                .then(response => response.json())
                .then(json => this.produtos = json)
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