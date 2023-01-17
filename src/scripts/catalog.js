
export const Catalog = (harvestedArray) => {
    let htmlString = ""
    for (const harvest of harvestedArray) {
        htmlString+= `<section class="plant">${harvest.type}</section>`
        
}
return htmlString
    }
    
