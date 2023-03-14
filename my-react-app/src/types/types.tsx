
type recipeItem = {
    name: string,
    calories: string,
    image: string,
    dishType: string,
    mealType: string,
    ingredientLines: Array<string>
    totalTime: number
}
type params = {
    search: string,
    health: string
}
interface item {
    calories: number
    cautions: []
    cuisineType: []
    dietLabels: []
    digest: []
    dishType: string
    healthLabels: string
    image: string
    ingredientLines: []
    ingredients: []
    label: string
    mealType: []
    shareAs: string
    source: string,
    totalDaily: object
    totalNutrients: object
    totalTime: number
    totalWeight: number
    uri: string
    url: string
    yield: number

}
interface cardsState {
    cards: any[],
    search: string,
    health: string,
    diet: string,
    mealType: string,
}
export { type recipeItem, type cardsState, type item, type params }