import ConversaoMoeda from "./ConversaoMoeda.js"

export default {
    name: "BolsaValores",
    components: {
        ConversaoMoeda
    },
    data() {
        return {
            precoAcao: 0
        }
    },
    methods: {
        fetchBolsaValores() {
            fetch("https://cloud.iexapis.com/stable/stock/aapl/quote?token=pk_ce65ce9a8401462896876061da0ed90d")
                .then(response => response.json())
                .then(json => this.precoAcao = json.marketCap)
        }
    },
    template: `
    <div>
        <conversao-moeda></conversao-moeda>
        <p>Preço ação apple: {{precoAcao}}</p>
    </div>
    `,
    created() {
        this.fetchBolsaValores()
    }
}