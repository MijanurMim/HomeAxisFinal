import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  getAdminProject,
} from "../../../redux/actions/projectAction";
import Spinner from "../../Spinner/Spinner";
import ProjectListAdminData from "./ProjectListAdminData";

const ProjectListAdmin = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, projects, loading } = useSelector((state) => state.projects);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getAdminProject());
  }, [dispatch, alert, error]);
  console.log(projects);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <div class="relative m-5 overflow-x-auto shadow-md sm:rounded-lg md:m-20">
            <table class="w-full border-2 text-left text-sm text-gray-500 shadow-2xl dark:text-gray-400">
              <thead class=" text-md bg-gray-400 uppercase text-gray-700 md:text-lg">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    PROJECT NAME
                  </th>
                  <th scope="col" class="px-6 py-3">
                    COST
                  </th>
                  <th scope="col" class="px-6 py-3">
                    CATEGORY
                  </th>
                  <th scope="col" class="px-6 py-3">
                    EDIT
                  </th>
                  <th scope="col" class="px-6 py-3">
                    DELETE
                  </th>
                </tr>
              </thead>
              <tbody>
                {projects &&
                  projects.map((project) => (
                    <ProjectListAdminData
                      key={project._id}
                      project={project}
                    ></ProjectListAdminData>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectListAdmin;
