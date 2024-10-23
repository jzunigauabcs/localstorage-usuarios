class DB {
    constructor() {
        this.key = 'usuarios';
        this.usuarios = this.get(this.key);
    }

    store(data) {
        this.usuarios.push(data);
        this.set(this.usuarios, this.key);
    }

    findAll() {
        return this.get(this.key);
    }

    get(key) {
        return JSON.parse(localStorage.getItem(key)) || [];
    }

    set(data, key) {
        localStorage.setItem(key, JSON.stringify(data));
    }
}

function renderTable() {
    const table = document.querySelector('.tbl-usuarios tbody');
    table.innerHTML = '';

    const db = new DB();

    const usuarios = db.findAll();

    usuarios.forEach((u) => {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');

        td1.appendChild(document.createTextNode(u.usuario));
        td2.appendChild(document.createTextNode(u.email));
        td3.appendChild(document.createTextNode(u.pais));
        
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        table.appendChild(tr);
    })

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
    const db = new DB();
    db.store(usuario);
    renderTable();
}

function init() {
    const btnGuardar = document.querySelector('#btnGuardar');
    btnGuardar.addEventListener('click', guardarUsuario);
    renderTable();
}

document.addEventListener('DOMContentLoaded', init);
