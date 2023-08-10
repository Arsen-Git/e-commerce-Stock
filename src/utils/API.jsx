import axios from "axios";
import Stripe from "stripe";

export default function API() {
  const getAllMarketplaceProduct = async () => {
    const data = await axios
      .get("https://6363becf37f2167d6f8223de.mockapi.io/stock/")
      .then((response) => {
        return response.data[1].data;
      })
      .catch((e) => console.log(e));
    return await data;
  };

  const getAllOrders = async () => {
    const data = await axios
      .get("https://6363becf37f2167d6f8223de.mockapi.io/data/")
      .then((response) => {
        return response.data[0].orders;
      })
      .catch((e) => console.log(e));
    return await data;
  };

  const getAllHomepageData = async () => {
    const data = await axios
      .get("https://6363becf37f2167d6f8223de.mockapi.io/stock/")
      .then((response) => {
        return response.data[0].data[0].homepage;
      })
      .catch((e) => console.log(e));
    return await data;
  };

  const getMarketplaceProductById = async (id) => {
    const data = await axios
      .get("https://6363becf37f2167d6f8223de.mockapi.io/stock/")
      .then((response) => {
        return response.data[1].data.filter((product) => product.id === +id);
      })
      .catch((e) => console.log(e));
    return await data[0];
  };

  const getGoogleUser = async (accesstoken) => {
    const user = await axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accesstoken}`,
        {
          headers: {
            Authorization: `Bearer ${accesstoken}`,
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
    return await user;
  };

  const createStripePayment = async (amount) => {
    const stripe = new Stripe(
      "sk_test_51NbiaAKa4YIXTCTTUiYCmBDCqZ3bjXtEWq8ldabr2YZzdJbh9Iq5sQWKB4FEKlfK4Wvf6iByW9gCsBDZHalO4by700yEBisgvk"
    );
    const stripePrice = Math.floor((amount * 100) / 9.1);
    const paymentIntent = await stripe.paymentIntents.create({
      amount: stripePrice,
      currency: "pln",
      automatic_payment_methods: {
        enabled: true,
      },
    });
    return await paymentIntent.client_secret;
  };

  const updateOrders = async (newOrder) => {
    let oldOrders = null;
    try {
      oldOrders = await axios
        .get("https://6363becf37f2167d6f8223de.mockapi.io/data/")
        .then((response) => {
          return response.data[0].orders;
        });
    } catch (e) {
      console.log(e);
    }
    const newOrders = {
      id: 0,
      name: "orders",
      orders: [
        ...oldOrders,
        {
          id: oldOrders.length + 1,
          paymentAmount: newOrder.paymentAmount,
          paymentMethod: newOrder.paymentMethod,
          client: newOrder.name,
          adress: newOrder.adress,
          email: newOrder.email,
          phone: newOrder.phone,
          orderId: newOrder.orderId,
          orderItems: newOrder.cartItems,
          isDone: false,
        },
      ],
    };
    try {
      axios.put(
        "https://6363becf37f2167d6f8223de.mockapi.io/data/0",
        newOrders
      );
    } catch (e) {
      console.log(e);
    }
  };

  const deleteProduct = async (id) => {
    const allProducts = await getAllMarketplaceProduct();
    const newProductList = allProducts.filter((item) => item.id !== id);
    const newData = { id: 1, name: "marketplace", data: newProductList };
    try {
      axios.put("https://6363becf37f2167d6f8223de.mockapi.io/stock/1", newData);
    } catch (e) {
      console.log(e);
    }
  };

  const addProduct = async (product) => {
    const allProducts = await getAllMarketplaceProduct();
    product.id = allProducts.length + 1;
    const newData = {
      id: 1,
      name: "marketplace",
      data: [...allProducts, product],
    };
    try {
      axios.put("https://6363becf37f2167d6f8223de.mockapi.io/stock/1", newData);
    } catch (e) {
      console.log(e);
    }
  };

  const updateProduct = async (product) => {
    const allProducts = await getAllMarketplaceProduct();
    const newProductList = allProducts.filter((item) => item.id !== product.id);
    const newData = {
      id: 1,
      name: "marketplace",
      data: [...newProductList, product],
    };
    try {
      axios.put("https://6363becf37f2167d6f8223de.mockapi.io/stock/1", newData);
    } catch (e) {
      console.log(e);
    }
  };

  const changeOrderStatus = async (order) => {
    order.isDone = true;
    const allOrders = await axios
      .get("https://6363becf37f2167d6f8223de.mockapi.io/data/")
      .then((response) => {
        return response.data[0].orders;
      })
      .catch((e) => console.log(e));
    const newOrderList = allOrders.filter((o) => o.orderId !== order.orderId);
    const newData = { id: 0, name: "orders", orders: [...newOrderList, order] };
    axios.put("https://6363becf37f2167d6f8223de.mockapi.io/data/0", newData);
  };

  return {
    getAllMarketplaceProduct,
    getMarketplaceProductById,
    getAllHomepageData,
    getGoogleUser,
    createStripePayment,
    updateOrders,
    deleteProduct,
    updateProduct,
    addProduct,
    getAllOrders,
    changeOrderStatus,
  };
}
