import { useState } from "react";
import "./App.css";

type FormData = {
  firstName: string;
  lastName: string;
  age: number;
  favoriteFoods: string[];
};

const App = () => {
  /* Your states here */
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    age: 0,
    favoriteFoods: [],
  });

  const [isDisplay, setIsDisplay] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prevState) => {
        const favoriteFoods = checked
          ? [...prevState.favoriteFoods, value]
          : prevState.favoriteFoods.filter((food) => food !== value);
        return { ...prevState, favoriteFoods };
      });
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleDisplayUser = () => {
    setIsDisplay(true);
  };

  const handleClear = () => {
    setFormData({
      firstName: "",
      lastName: "",
      age: 0,
      favoriteFoods: [],
    });
    setIsDisplay(false)
  };

  return (
    <div>
      <h1>User Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Favorite Foods:</label>
          <div>
            <input
              type="checkbox"
              id="chicken"
              name="favoriteFoods"
              value="Chicken"
              onChange={handleChange}
              checked={formData.favoriteFoods.includes("Chicken")}
            />
            <label htmlFor="chicken">Chicken</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="beef"
              name="favoriteFoods"
              value="Beef"
              onChange={handleChange}
              checked={formData.favoriteFoods.includes("Beef")}
            />
            <label htmlFor="beef">Beef</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="vegetables"
              name="favoriteFoods"
              value="Vegetables"
              onChange={handleChange}
              checked={formData.favoriteFoods.includes("Vegetables")}
            />
            <label htmlFor="vegetables">Vegetables</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="dessert"
              name="favoriteFoods"
              value="Dessert"
              onChange={handleChange}
              checked={formData.favoriteFoods.includes("Dessert")}
            />
            <label htmlFor="dessert">Dessert</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="pork"
              name="favoriteFoods"
              value="Pork"
              onChange={handleChange}
              checked={formData.favoriteFoods.includes("Pork")}
            />
            <label htmlFor="pork">Pork</label>
          </div>
        </div>
      </form>

      <button type="button" onClick={handleDisplayUser}>
        Display User
      </button>
      <button type="button" onClick={handleClear}>Clear</button>

      <div className="output">
        {isDisplay
          ? `
        Hello ${formData.firstName} ${formData.lastName}. You are ${
              formData.age
            } years old and your favorite foods are: ${formData.favoriteFoods.join(
              ", "
            )}
      `
          : ""}
      </div>
    </div>
  );
};

export default App;
