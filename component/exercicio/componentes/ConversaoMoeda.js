export default {
    name: "ConversaoMoeda",
    data() {
        return {
            conversaoReal: {}
        }
    },
    methods: {
        fetchConversaoMoeda() {
            fetch("https://api.exchangeratesapi.io/latest?base=USD")
                .then(response => response.json())
                .then(json => this.conversaoReal = json.rates.BRL.toFixed(2))
        }
    },
    template: `
    <p>Valor real: {{conversaoReal}}</p>
    `,
    created() {
        this.fetchConversaoMoeda()
    }
}