import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  clearErrors,
  getProjectDetails,
  updateProject,
} from "../../../../redux/actions/projectAction";
import { UPDATE_PROJECT_RESET } from "../../../../redux/constants/projectConstant";
import SpinnerButton from "../../../Spinner/SpinnerButton";
import Sidebar from "../../SIdebar/Sidebar";

const categories = ["On Going", "Upcoming", "Completed"];

const UpdateProject = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  const id = useParams();

  const [inputs, setInputs] = useState({});
  const [images, setImages] = useState([]);

  const { error, project } = useSelector((state) => state.projectDetails);

  console.log(project);

  const {
    error: updateError,
    isUpdated,
    loading,
  } = useSelector((state) => state.updateProject);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const projectData = { ...inputs, images: images };

  useEffect(() => {
    if (project && project._id !== id.id) {
      dispatch(getProjectDetails(id.id));
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (updateError) {
      alert.error(updateError);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert.success("Project Updated Successfully");
      navigate("/admin/projects");
      dispatch({ type: UPDATE_PROJECT_RESET });
    }
  }, [
    dispatch,
    id.id,
    project,
    alert,
    error,
    navigate,
    isUpdated,
    updateError,
  ]);

  // Project Update Handler
  const handleUpdateProject = (e) => {
    e.preventDefault();

    // Checking before Update
    const proceed = window.confirm("Are Your Sure ???");
    if (proceed) {
      dispatch(updateProject(id.id, projectData));
    }
  };

  //   Image Handler
  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    // setImagesPreview([]);
    // setOldImages([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        if (reader.readyState === 2) {
          // setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="m-10 mx-40 grid grid-cols-6 ">
      <div></div>
      <div className="text-end ">
        <Sidebar></Sidebar>
      </div>
      <div className="  col-span-3 flex flex-col items-center bg-slate-200 p-20">
        <p className=" text-3xl text-orange-500">Update Project</p>
        <form
          encType="multipart/form-data"
          onSubmit={handleUpdateProject}
          className="my-10 "
        >
          <div className="my-5">
            <label className="mr-20">NAME:</label>
            <input
              type="text"
              placeholder={project.name}
              defaultValue={project.name}
              required
              name="name"
              onChange={handleChange}
              // onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="my-5">
            <label className="mr-20">PRICE:</label>
            <input
              name="price"
              type="number"
              placeholder={project.price}
              defaultValue={project.price}
              required
              // onChange={(e) => setPrice(e.target.value)}
              onChange={handleChange}
            />
          </div>

          <div className="my-5">
            <label className="mr-6">DESCRIPTION:</label>
            <textarea
              placeholder={project.description}
              defaultValue={project.description}
              required
              name="description"
              // cols="30"
              // rows="1"
              onChange={handleChange}
              // onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="my-5">
            <label className="mr-12">Categories</label>
            <select
              name="category"
              onChange={handleChange}
              placeholder={project.category}
              defaultValue={project.category}
            >
              {categories.map((cate) => (
                <option key={cate} value={cate}>
                  {cate}
                </option>
              ))}
            </select>
          </div>

          {/* Images */}
          <div className="my-5">
            <label className="mr-16">IMAGES:</label>
            <input
              type="file"
              name="avatar"
              accept="image/*"
              multiple
              onChange={createProductImagesChange}
              // onChange={(e) => setImages(e.target.files)}
            />
          </div>

          {/* <div className="my-5">
              {imagesPreview.map((image, index) => (
                <img key={index} src={image} alt="Product Preview" />
              ))}
            </div> */}

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading ? true : false}
              class="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 p-0.5 text-sm font-medium text-orange-500 hover:text-white focus:outline-none focus:ring-4 focus:ring-cyan-200 group-hover:from-cyan-500 group-hover:to-blue-500 dark:text-white dark:focus:ring-cyan-800"
            >
              <span class="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
                Update Project {loading ? <SpinnerButton /> : false}
              </span>
            </button>
          </div>
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default UpdateProject;
