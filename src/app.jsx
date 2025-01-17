import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

export function App() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      selectedOption: "select", // Default placeholder value until data is fetched
    },
  });

  const [loading, setLoading] = useState(true); // State to track loading status

  // Simulate an API call to fetch default values
  useEffect(() => {
    async function fetchDefaultValues() {
      setLoading(true);
      try {
        // Simulate API response
        const apiResponse = await new Promise((resolve) =>
          setTimeout(() => {
            resolve({
              firstname: "John",
              lastname: "Doe",
              selectedOption: "Goel",
            });
          }, 2000)
        );

        // Set the fetched values into the form
        Object.keys(apiResponse).forEach((key) => {
          setValue(key, apiResponse[key]);
        });
      } catch (error) {
        console.error("Error fetching default values:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchDefaultValues();
  }, [setValue]);

  // Handle form submission
  function onSubmit(data) {
    console.log("Submitted Data:", data);
    // Save data to localStorage
    localStorage.setItem("formData", JSON.stringify(data));
  }

  return (
    <div>
      <style>
        {`
          .loading {
            text-align: center;
            font-size: 18px;
            margin: 20px;
          }
        `}
      </style>
      {loading ? (
        <div className="loading">Loading form...</div>
      ) : (
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
            <label>Select Option</label>
            <select {...register("selectedOption")}>
              <option value="select" disabled>
                Select
              </option>
              <option value="Harsh">Harsh</option>
              <option value="Goel">Goel</option>
              <option value="None">None</option>
            </select>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
}
