const recipe = { name: "Spaghetti Bolognese", ingredients: ["egg", "salt"] }

const newRecipe = {
...recipe, 
ingredients: [...recipe.ingredients, "cream"].map(i => i === "egg" ? "egg white" : i).filter(i => i !== "egg")
}

console.log(newRecipe)

const newRecipeImmer = immer.produce(recipe, draftRecipe => {
	draftRecipe.ingredients.push("cream");
  draftRecipe.ingredients = draftRecipe.ingredients.map(i => i === "egg" ? "egg white" : i);
	draftRecipe.ingredients = draftRecipe.ingredients.filter(i => i !== "egg");
})

console.log(newRecipeImmer)

const immutableRecipe = Immutable.Map({ 
  name: "Spaghetti Bolognese", 
  ingredients: Immutable.List(["egg", "salt"])
});

let newImmutableRecipe = immutableRecipe.set("ingredients", immutableRecipe.get("ingredients").push("cream"))
newImmutableRecipe = newImmutableRecipe.set("ingredients", newImmutableRecipe.get("ingredients").filter(i => i !== "egg"))

console.log(newImmutableRecipe.toJS())

