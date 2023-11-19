// usuarios.js

// Função para realizar a chamada AJAX e carregar os dados
function loadUsers() {
    $.ajax({
        url: "https://reqres.in/api/users?per_page=10",
        method: "GET",
        success: function (data) {
            // Atualiza os dados do Vue.js com os dados recebidos
            app.users = data.data;
        },
        error: function (error) {
            console.error("Erro ao carregar usuários:", error);
        }
    });
}

// Objeto Vue.js
var app = new Vue({
    el: "#usuarios",
    data: {
        users: [] // Inicialmente vazio
    },
    mounted: function () {
        this.loadUsers(); // Chama a função loadUsers ao montar o componente
    },
    methods: {
        loadUsers: loadUsers // Adiciona a função loadUsers aos métodos do Vue.js
    }
});
