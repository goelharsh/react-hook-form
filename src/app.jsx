import "./app.css";
import { useForm } from "react-hook-form";

export function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log("here", data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First name</label>
          <input {...register("firstname")} />
        </div>
        <div>
          <label>Last name</label>
          <input {...register("lastname")} />
        </div>
        <div>
          <button type="submit">Submit </button>
        </div>
      </form>
    </div>
  );
}
