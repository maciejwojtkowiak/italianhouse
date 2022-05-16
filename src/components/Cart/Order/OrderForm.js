import SendOrderButton from "./SendOrderButton";
import styles from "./OrderForm.module.css";
import { useState, useReducer, useEffect } from "react";
import { useSelector } from "react-redux";

const initialReducerValue = {
  name: {
    val: "",
    isValid: false,
    errorMessage: null,
    errorClass: null,
  },
  lastName: {
    val: "",
    isValid: false,
    errorMessage: null,
    errorClass: null,
  },
  phoneNumber: {
    val: "",
    isValid: false,
    errorMessage: null,
    errorClass: null,
  },
  city: {
    val: "",
    isValid: false,
    errorMessage: null,
    errorClass: null,
  },
  street: {
    val: "",
    isValid: false,
    errorMessage: null,
    errorClass: null,
  },
  postal: {
    val: "",
    isValid: false,
    errorMessage: null,
    errorClass: null,
  },
};

const OrderForm = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const orderReducer = (state, action) => {
    if (action.type === "HANDLE TEXT CHANGE") {
      let inputIsValid = false;
      let errorMessage = null;
      let errorClass = null;
      if (action.payload.trim().length === 0) inputIsValid = false;
      if (action.payload.trim().length > 0) inputIsValid = true;

      if (
        (action.field === "name" ||
          action.field === "lastName" ||
          action.field === "city" ||
          action.field === "street") &&
        !inputIsValid
      ) {
        errorMessage = `${
          action.field === "lastName" ? "last name" : action.field
        } must contain only letters and cannot be empty`;
      }

      if (action.field === "phoneNumber" && !inputIsValid) {
        errorMessage =
          "Phone number must contain only numbers and should be the length of 9";
      }

      if (action.field === "postal" && !inputIsValid) {
        errorMessage =
          "Postal must contain only numbers and should be the length of 5";
      }

      if (!inputIsValid) {
        errorClass = `${styles.error}`;
      }

      return {
        ...state,
        [action.field]: {
          val: action.payload,
          isValid: inputIsValid,
          errorMessage: errorMessage,
          errorClass: errorClass,
        },
      };
    }

    if (action.type === "CLEAR") {
      return {
        ...initialReducerValue,
      };
    }
  };

  const [formState, formDispatch] = useReducer(
    orderReducer,
    initialReducerValue
  );
  const [formIsValid, setFormIsValid] = useState(false);

  const changeTextHandler = (e) => {
    formDispatch({
      type: "HANDLE TEXT CHANGE",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  useEffect(() => {
    const validationArray = [];
    for (const key of Object.keys(formState)) {
      validationArray.push(formState[key].isValid);
    }

    const isTrue = validationArray.every((item) => item);
    setFormIsValid(isTrue);
  }, [formState]);

  const onOrderHandler = (e) => {
    e.preventDefault();
    const inputArray = [];
    for (const [key, value] of Object.entries(formState)) {
      inputArray.push({ [key]: value.val });
    }
    fetch(
      "https://italianhouse-1aef0-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({ cartItems: cartItems, userData: inputArray }),
        headers: {
          "content-type": "application/json",
        },
      }
    );
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    formDispatch({
      type: "CLEAR",
    });
  };

  return (
    <form onSubmit={onSubmitHandler} className={styles.orderForm}>
      <label htmlFor="name">Name</label>
      <input
        className={formState.name.errorClass}
        onChange={changeTextHandler}
        id="name"
        name="name"
        type="text"
        placeholder={formState.name.errorMessage}
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        className={formState.lastName.errorClass}
        onChange={changeTextHandler}
        id="lastName"
        name="lastName"
        type="text"
        placeholder={formState.lastName.errorMessage}
      />

      <label htmlFor="phoneNumber">Phone Number</label>
      <input
        className={formState.phoneNumber.errorClass}
        onChange={changeTextHandler}
        id="phoneNumber"
        name="phoneNumber"
        type="number"
        placeholder={formState.phoneNumber.errorMessage}
      />

      <label htmlFor="city">City</label>
      <input
        className={formState.city.errorClass}
        onChange={changeTextHandler}
        id="city"
        name="city"
        type="text"
        placeholder={formState.city.errorMessage}
      />

      <label htmlFor="street">Street</label>
      <input
        className={formState.street.errorClass}
        onChange={changeTextHandler}
        id="street"
        name="street"
        type="text"
        placeholder={formState.street.errorMessage}
      />

      <label htmlFor="postal">Postal Code</label>
      <input
        className={formState.postal.errorClass}
        onChange={changeTextHandler}
        id="postal"
        name="postal"
        type="text"
        placeholder={formState.postal.errorMessage}
      />

      {<SendOrderButton isValid={formIsValid} onOrder={onOrderHandler} />}
    </form>
  );
};

export default OrderForm;
