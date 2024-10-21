class LocalStorage {
    constructor() {
        this.key = 'usuarios';
        this.usuarios = this.get() || [];
    }

    store(usuario) {
        this.set(usuario);
    }

    findAll() {
        return this.get();
    }

    get() {
        return JSON.parse(localStorage.getItem(this.key));
    }

    set(data) {
        localStorage.setItem(this.key, JSON.stringify(data));
    }
}

function guardarUsuario(e) {
    e.preventDefault();
    const tbxUsuario = document.querySelector('#tbxUsuario');
    const tbxPassword = document.querySelector('#tbxPassword');
    const tbxEmail = document.querySelector("#tbxEmail");
    const cbxPais = document.querySelector('#cbxPais');

    const usuario = {
        usuario: tbxUsuario.value,
        password: tbxPassword.value,
        email: tbxEmail.value,
        pais: cbxPais.value
    };
    const local = new LocalStorage();
    local.store(usuario);
}

function init() {
    const btnGuardar = document.querySelector('#btnGuardar');
    btnGuardar.addEventListener('click', guardarUsuario);
}

document.addEventListener('DOMContentLoaded', init);
