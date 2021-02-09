const app = {
    data() {
        return {
            menus: []
        }
    },
    methods: {

    },

    mounted() {
    fetch('https://mockend.com/org/aganadeins/course_m3_project')
        .then((response)=> {
            return response.json();
    }).then((data)=> {
        this.menus = data;
        this.console.log;
    })
    }
}

Vue.createApp(app).mount('#menu');