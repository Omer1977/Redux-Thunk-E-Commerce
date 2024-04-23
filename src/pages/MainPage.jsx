import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setProducts,
  setLoading,
  setError,
  getProducts,
} from "../redux/actions/productActions";
import axios from "axios";
import Loading from "../components/Loading";
import Card from "../components/Card";
import { getBasket } from "../redux/actions/basketActions";

const MainPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.product);

  console.log(state);

  useEffect(() => {
    /*dispatch(setLoading())

    axios.get('http://localhost:3050/products')
    .then((res) => dispatch(setProducts(res.data)))
    .catch((err) => dispatch(setError(err)));*/
    dispatch(getProducts());
    dispatch(getBasket());
  }, []);
  return (
    <div>
      {state.isLoading && <Loading />}

      {state.isError && (
        <p className="text-center my-5 fw-bold">
          Üzgünüz, bir hata oluştu: <br />
          {state.isError}
        </p>
      )}

      <div className="d-flex flex-wrap gap-5 justify-content-center my-5">
        {state.products.map((product, i) => (
          <Card product={product} key={i} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
