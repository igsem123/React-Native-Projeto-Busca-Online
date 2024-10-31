import api from "../api";

export async function pegarRepositoriosDoUsuario(login) {
    try {
        const resultado = await api.get(`/users/${login}/repos`);
        return resultado.data;
    } catch (error) {
        console.log(error);
        return []
    }
}

export async function atualizarRepositoriosDoUsuario(name, data, postId, id) {
    try {
        await api.put(`/repos/${id}`, {
            name: name,
            data: data,
            postId: postId,
            id: id
        });
        return 'sucesso';
    } catch (error) {
        console.log(error);
        return 'erro'
    }
}

export async function criarRepositoriosDoUsuario(postId, nome, data) {
    try {
        await api.post(`/repos`, {
            postId: postId,
            name: nome,
            data: data
        });
        return 'sucesso';
    } catch (error) {
        console.log(error);
        return 'erro'
    }
}

export async function deletarRepositoriosDoUsuario(id) {
    try {
        await api.delete(`/repos/${id}`);
        return 'sucesso';
    } catch (error) {
        console.log(error);
        return 'erro'
    }
}

export async function buscaRepositorios(login, name) {
    try {
        const resultado = await api.get(`/users/${login}/repos`);
        const repositorios = resultado.data;

        // Filtrar os repositórios pelo nome
        const repositoriosFiltrados = repositorios.filter(repo => repo.name.includes(name));
        return repositoriosFiltrados;
    } catch (error) {
        console.log(error);
        return [];
    }
}