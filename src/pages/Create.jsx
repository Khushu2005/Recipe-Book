import { useForm } from "react-hook-form"


const Create = () => {

  const{handleSubmit,register,reset,error}=useForm()
  return (
    <div>
      <form >
        <input type="url"placeholder="Enter Image Url" {...register("image")} />
        <small>This is how error is shown</small>
        <input type="text"placeholder="Recipe Title"  {...register("RecipeTitle")} />
         <small>This is how error is shown</small>
        <input type="text"placeholder="Chef name"  {...register("Chefname")} />
         <small>This is how error is shown</small>
        <select name="category" id="category"  {...register("category")}>
          <option value="cat-1">cat1</option>
          <option value="cat-2">cat2</option>
          <option value="cat-3">cat3</option>
        </select>
         <small>This is how error is shown</small>
        <textarea name="description" id="description"  {...register("description")}>Enter Description Here!</textarea>
         <small>This is how error is shown</small>
         <textarea name="ingredients" id="ingredients"  {...register("Ingredients")}>Enter Ingredients Here!</textarea>
          <small>This is how error is shown</small>
         <button>Save Rescipe</button>
         
      </form>
    </div>
  )
}

export default Create