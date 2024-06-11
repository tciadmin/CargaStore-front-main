import { axiosInstance } from "../../axiosInstance";
//?------------------------------------------FEEDBACK
export const POST_FEEDBACK = "POST_FEEDBACK";
export const GET_FEEDBACK = "GET_FEEDBACK";

export const getFeedback = (id) => {
  return async (dispatch) => {
    try {
      const comment = await axiosInstance(`/feedback/get/${id}`);
      return dispatch({
        type: GET_FEEDBACK,
        payload: comment,
      });
    } catch (error) {
      console.log("Se produjo un error al buscar comentarios");
    }
  };
};

export const postFeedback = (feedback) => {
  return async (dispatch) => {
    try {
      const comment = await axiosInstance.post("/feedback/create", feedback);
      return dispatch({
        type: POST_FEEDBACK,
        payload: comment,
      });
    } catch (error) {
      console.log("Se produjo un error al publicar calificación");
    }
  };
};
