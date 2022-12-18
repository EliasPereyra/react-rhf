import { useForm, SubmitHandler } from "react-hook-form";

import "./styles.css";

type Inputs = {
  example: string;
  exampleRequired: string;
};

function FormComponent() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Technologies:</label>
      <select>
        <option value="react.js">React.js</option>
        <option value="next.js">Next.js</option>
        <option value="vue">Vue</option>
        <option value="nuxt.js">Nuxt.js</option>
        <option value="angular">Angular</option>
        <option value="svelte">Svelte</option>
        <option value="sveltekit">SvelteKit</option>
        <option value="solid.js">Solid.js</option>
        <option value="solidstart">Solid Start</option>
        <option value="remix">Remix</option>
        <option value="astro.js">Astro.js</option>
      </select>

      <label>Experience:</label>
      <select>
        <option value="junior">Junior</option>
        <option value="semisenior">Semi-senior</option>
        <option value="senior">Senior</option>
      </select>

      <input type="submit" />
    </form>
  );
}

export default FormComponent;
