import api from "../api";

export async function pegarRepositoriosDoUsuario(id) {
    try {
        const resultado = await api.get(`/repos?postId=${id}`);
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

export async function buscaRepositorios(nomeRepositorio) {
    try {
        const resultado = await api.get(`/repos?name=${nomeRepositorio}`);
        return resultado.data;
    } catch (error) {
        console.log(error);
        return []
    }
}