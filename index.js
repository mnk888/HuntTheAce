const cardObjectDefenitions = [
    {id:1, imagePath:'/images/card-KingHearts.png'},
    {id:2, imagePath:'/images/card-JackClubs.png'},
    {id:3, imagePath:'/images/card-QueenDiamonds.png'},
    {id:4, imagePath:'/images/card-AceSpades.png'}
];

{<div class="card">
    <div class="card-inner">
        <div class="card-front">
            <img src="/images/card-JackClubs.png" alt="" class="card-img"></img>
        </div>
        <div class="card-back">
            <img src="/images/card-back-Blue.png" alt="" class="card-img"></img>
        </div>
    </div>
</div>}

function createCard(cardItem){

    // create div elements that make up a card
    const cardElem = createElement('div')
    const cardInnerElem = createElement('div')
    const cardFrontElem = createElement('div')
    const cardBackElem = createElement('div')

    // create foront and back image elements for a card
    const cardFrontImg = createElement('img')
    const cardBackImg = createElement('img')

    addClassToElement(cardElem, 'card')
    addIdToElement(cardElem, cardItem.id)
}
function createElement(elemType){
    return document.createElement(elemType)

}
function addClassToElement(elem, className){
    elem.classList.add(className)
}
function addIdToElement(elem, id){
    elem.id = id
}