const app = {
    data() {
        return {
            menus: [],
        }
    },
    methods: {

    },
    mounted() {
    fetch('D:\web dev\courses\mod3\Course_project\assets\js\menu.json')
        .then((response)=> {
            return response.json();
    }).then((data)=> {
        this.menus = data;
    })
    }
}

Vue.createApp(app).mount('#menu');