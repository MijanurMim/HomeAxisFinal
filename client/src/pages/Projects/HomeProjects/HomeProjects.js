import { default as React, useEffect, useState } from "react";
import { useAlert } from "react-alert";
import Pagination from "react-js-pagination";
import { useDispatch, useSelector } from "react-redux";
import ProjectItem from "../../../components/Projects/ProjectItem";
import Spinner from "../../../components/Spinner/Spinner";
import { clearErrors, getProject } from "../../../redux/actions/projectAction";
import "../OnGoing/Ongoing.css";

const HomeProjects = () => {
  const alert = useAlert();

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  const { loading, error, projects, projectsCount, resultPerPage } =
    useSelector((state) => state.projects);

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProject(currentPage));
  }, [dispatch, error, alert, currentPage]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className=" shadow-xl">
            <p className="my-10 text-center text-2xl font-bold text-orange-500 md:text-4xl">
              PROJECTS
            </p>
            <div className="xl:mx-30 mx-5  grid  grid-cols-1 justify-items-center gap-8 lg:mx-20 lg:grid-cols-2 xl:grid-cols-3 2xl:mx-60	">
              {projects &&
                projects.map((project) => (
                  <ProjectItem
                    key={project._id}
                    project={project}
                  ></ProjectItem>
                ))}
            </div>{" "}
            {/* Experiment Masonry  */}
            <div>
              <p className="my-10 text-center text-2xl font-bold text-orange-500 md:text-4xl">
                FEATURED WORKS
              </p>
              <div class="grid grid-cols-6 grid-rows-3 gap-4">
                <div class="bg-orange-400col-span-4 col-start-2">01</div>
                <div class="col-start-1 col-end-3 bg-orange-400">02</div>
                <div class="col-span-2 col-end-7 bg-orange-400">03</div>
                <div class="col-start-1 col-end-7 bg-orange-400">04</div>
              </div>
            </div>
            {/* Pagination section  */}
            {resultPerPage < projectsCount && (
              <div className="paginationBox ">
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={resultPerPage}
                  totalItemsCount={projectsCount}
                  onChange={setCurrentPageNo}
                  nextPageText="Next"
                  prevPageText="Prev"
                  firstPageText="1st"
                  lastPageText="Last"
                  itemClass="page-item"
                  linkClass="page-link"
                  activeClass="pageItemActive"
                  activeLinkClass="pageLinkActive"
                ></Pagination>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default HomeProjects;
