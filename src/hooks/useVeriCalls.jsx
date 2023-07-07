import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchFail, fetchStart, getSuccess } from "../features/dataSlice";

const useVeriCalls = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const BASE_URL = "https://63878fa2e399d2e47302d660.mockapi.io/";

  //!------------- GET CALLS ----------------
  const getBaseVeri = async (url) => {
    dispatch(fetchStart());

    try {
      const { data } = await axios(BASE_URL + url);
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };
  const getData = () => getBaseVeri("api");

  //!------------- DELETE CALLS ----------------
  const deleteBaseVeri = async (url) => {
    try {
      await axios.delete(BASE_URL + `${url}/${id}/`);
      getBaseVeri(url);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteVeri = (id) => deleteBaseVeri("api", id);

  // //!------------- POST CALLS ----------------
  const postBaseVeri = async (newVeri, url) => {
    try {
      await axios.post(BASE_URL + `${url}`, newVeri);
      getBaseVeri(url);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const postVeri = (newVeri) => postBaseVeri(newVeri, "api");

  //!------------- PUT CALLS ----------------
  const putBaseVeri = async (veri, url) => {
    try {
      await axios.put(BASE_URL + `${url}/${veri.id}/`, veri);
      getBaseVeri(url);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const putVeri = (veri) => putBaseVeri(veri, "api");

  return { getData, deleteVeri, putVeri, postVeri };
};

export default useVeriCalls;
