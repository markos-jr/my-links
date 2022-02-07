//Buscar os links salvos.
 export async function getLinksSave(key){
    const myLinks = await localStorage.getItem(key)

    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;
}





//Salvar um link no local storage.
export async function saveLink(key, newLink){
    let linksStored = await getLinksSave(key);

    //Se já tiver um link salvo com ID eu não vou deixar duplicar

    const hasLink = linksStored.some(link => link.id === newLink.id)

    if(hasLink){
        console.log('ESSE LINK JÁ EXISTE NA SUA LISTA')
        return;
    }
        //Adiciona esse novo link na lista..
        linksStored.push(newLink)
        await localStorage.setItem(key, JSON.stringify(linksStored))
        console.log('LINK SALVO COM SUCESSO')
}




//Deletar algum link salvo.

export function deleteLink(links, id){

    let myLinks = links.filter(item => {
        return(item.id !== id)
    })

    localStorage.setItem('@encurtalink', JSON.stringify(myLinks));
    console.log('LINK DELETADO COM SUCESSO!')

    return myLinks;
}