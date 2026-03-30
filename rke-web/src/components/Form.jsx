import { useState } from "react"

function Form() {
    // checkboxes
    const [isChecked, setIsChecked] = useState(false);

    return (
        <main>
            <form>
                <div>
                    <label for="name-of-recipe" id="name-of-recipe">Name of Recipe</label>
                    <input id="recipe-name" name="recipe-name" placeholder="enter recipe name"></input>
                    <textarea id="recipe" name="recipe" placeholder="eg"></textarea>
                </div>
                <div>
                    <div id="recipe-info">
                        <label className="input-label">Original Recipe</label>
                        <input></input>
                        <label className="input-label">Desired Serving</label>
                        <input></input>
                        <label className="input-label">Recipe Multiplier</label>
                        <input></input>
                        
                        <label className="checkbox-label">
                            <input 
                                type="checkbox"  
                                id="original-recipe" 
                                name="original-recipe" 
                                checked={isChecked} 
                                onChange={e => setIsChecked(e.target.checked)}>
                            </input>
                            Convert Whole Recipe
                        </label>

                    </div>
                    <div id="recipe-adjuster">
                    </div>
                </div>
            </form>
        </main>
    )
} 

export default Form