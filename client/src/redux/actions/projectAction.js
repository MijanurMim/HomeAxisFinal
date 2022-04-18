import axios from "axios";
import {
  ADMIN_PROJECT_FAIL,
  ADMIN_PROJECT_REQUEST,
  ADMIN_PROJECT_SUCCESS,
  ALL_PROJECT_FAIL,
  ALL_PROJECT_REQUEST,
  ALL_PROJECT_SUCCESS,
  CLEAR_ERRORS,
  DELETE_PROJECT_FAIL,
  DELETE_PROJECT_REQUEST,
  DELETE_PROJECT_SUCCESS,
  NEW_PROJECT_FAIL,
  NEW_PROJECT_REQUEST,
  NEW_PROJECT_SUCCESS,
  PROJECT_DETAILS_FAIL,
  PROJECT_DETAILS_REQUEST,
  PROJECT_DETAILS_SUCCESS,
  UPDATE_PROJECT_FAIL,
  UPDATE_PROJECT_REQUEST,
  UPDATE_PROJECT_SUCCESS,
} from "../constants/projectConstant.js";

// Get All Project from server
export const getProject =
  (currentPage = 1, category) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_PROJECT_REQUEST });

      let link = `/api/v1/projects?page=${currentPage}`;
      if (category) {
        link = `/api/v1/projects?page=${currentPage}&category=${category}`;
      }

      const { data } = await axios.get(link);

      dispatch({ type: ALL_PROJECT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: ALL_PROJECT_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Get All Projects for ADMIN
export const getAdminProject = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_PROJECT_REQUEST });

    const { data } = await axios.get("/api/v1/admin/projects");

    dispatch({ type: ADMIN_PROJECT_SUCCESS, payload: data.projects });
  } catch (error) {
    dispatch({
      type: ADMIN_PROJECT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Create NEW project
export const createProject = (projectData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_PROJECT_REQUEST });

    const config = {
      headers: { "Content-type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v1/admin/project/new`,
      projectData,
      config
    );

    dispatch({
      type: NEW_PROJECT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_PROJECT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete A project
export const deleteProject = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PROJECT_REQUEST });

    const { data } = await axios.delete(`/api/v1/admin/project/${id}`);

    dispatch({
      type: DELETE_PROJECT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PROJECT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get Single Project Details
export const getProjectDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PROJECT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v1/project/${id}`);

    dispatch({ type: PROJECT_DETAILS_SUCCESS, payload: data.project });
  } catch (error) {
    dispatch({
      type: PROJECT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Updating Existing project
export const updateProject = (id, projectData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROJECT_REQUEST });

    const config = {
      headers: { "Content-type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v1/admin/project/${id}`,
      projectData,
      config
    );

    dispatch({
      type: UPDATE_PROJECT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PROJECT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
