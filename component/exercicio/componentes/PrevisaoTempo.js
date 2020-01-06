export default {
    name: "PrevisaoTempo",
    data() {
        return {
            temperaturaMaxima: {}
        }
    },
    methods: {
        fetchPrevisaoTempo() {
            fetch("https://www.metaweather.com/api/location/455825/")
                .then(response => response.json())
                .then(json => this.temperaturaMaxima = json.consolidated_weather[0].max_temp.toFixed(2))
        }
    },
    template: `
    <p>Rio de Janeiro, máxima de: {{temperaturaMaxima}}</p>
    `,
    created() {
        this.fetchPrevisaoTempo()
    }
}