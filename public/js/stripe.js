/* eslint-disable */
import axios from 'axios';
const stripe = Stripe(
  'pk_test_51KrHcrEPlxDCYi4ZrFFa4YKnd1szbO2eNVx58OKOVIODqN08o9cPED30hHkzaTRtJLxjwIuagM6PNXb7PxGnHKIG004TWg5Opc'
);

export const bookTour = async (tourId) => {
  // 1) Get checkout session from API
  const session = await axios(
    `http://127.0.0.1:3000/api/v1/bookings/check-session/${tourId}`
  );
  console.log(session);
  // 2) Create checkout form + charge credit card
};
