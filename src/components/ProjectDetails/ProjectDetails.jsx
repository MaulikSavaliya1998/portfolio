import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PROJECTS_DATA, PROJECT_TECHS, SKILLS_DATA } from "../../data";

const ProjectDetails = () => {
  const params = useParams();
  const [project, setProject] = useState();

  useEffect(() => {
    setProject(PROJECTS_DATA.find((proj) => +proj.id === +params.id));
  }, [params]);

  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {project?.name}
          </h2>
          <p className="mt-4 text-gray-500">{project?.description}</p>

          <dl className="mt-16">
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Tech Stack</dt>
              <dd className="mt-2 flex gap-3 flex-wrap items-center text-sm text-gray-500">
                {project?.tags.map((tag) => (
                  <img
                    src={PROJECT_TECHS[tag]}
                    alt={tag}
                    width={50}
                    height={60}
                  />
                ))}
              </dd>
            </div>
          </dl>
          <hr className="mt-16" />
          
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
