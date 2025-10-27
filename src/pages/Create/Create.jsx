import { nanoid } from "nanoid";
import { useContext } from "react";
import {useForm } from "react-hook-form";
import { recipeContext } from "../../context/RecipeContext";

const Create = () => {
  const {data,setdata}=useContext(recipeContext)
  const { register, handleSubmit,reset  } = useForm();
  const SubmitHandler = (recipe)=>{
    recipe.id = nanoid()
    setdata([...data,recipe])
    reset();
   
  }
  return (
    <div>
      <form onSubmit={handleSubmit(SubmitHandler)}>
         <select {...register("catergory")} placeholder="Category">

          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Snack">Snack</option>

        </select>
        {/* <small>This is how the error is shown</small> */}


        <input 
        type="url"
        placeholder="Image_URL" 
        {...register("image")} />
        {/* <small>This is how the error is shown</small> */}

        <input 
        type="text" 
        placeholder="Recipe_Title" 
        {...register("title")} />
        {/* <small>This is how the error is shown</small> */}

         <textarea
          placeholder="Description" 
        {...register("description")}>
           </textarea>
        {/* <small>This is how the error is shown</small> */}

        <textarea
          placeholder="Ingredients" 
        {...register("ingredients")}> 
        </textarea>
        {/* <small>This is how the error is shown</small> */}

        <input 
        type="text" 
        placeholder="Instructions" 
        {...register("instructions")} />
        {/* <small>This is how the error is shown</small> */}

        <input 
        type="text" 
        placeholder="Chef Name" 
        {...register("chef")} />
        {/* <small>This is how the error is shown</small> */}

        <button >Save</button>

      </form>
    </div>
  );
};

export default Create;
