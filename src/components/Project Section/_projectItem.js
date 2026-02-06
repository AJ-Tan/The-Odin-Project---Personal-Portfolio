import { projectImageSrc } from "../../utilities/common-functions/imageImports";

const projectListElem = document.querySelector(".project-list");

export const projectItem = ({
  projectName,
  projectOrigin,
  technologyUsed,
  projectImage,
  projectLink,
}) => {
  const projectItemElem = document.createElement("li");
  projectItemElem.classList.add("project-item");
  projectListElem.appendChild(projectItemElem);

  const anchorElem = document.createElement("a");
  anchorElem.href = projectLink;
  anchorElem.target = "_blank";
  anchorElem.rel = "noopener noreferrer";
  projectItemElem.appendChild(anchorElem);

  const projectImageContainerElem = document.createElement("div");
  projectImageContainerElem.classList.add("project-image-container");
  anchorElem.appendChild(projectImageContainerElem);

  const projectImageElem = document.createElement("img");
  projectImageElem.classList.add("project-image");
  projectImageElem.src = projectImageSrc[projectImage];
  projectImageContainerElem.appendChild(projectImageElem);

  const projectDetailsElem = document.createElement("div");
  projectDetailsElem.classList.add("project-details");
  anchorElem.appendChild(projectDetailsElem);

  const projectEyebrowElem = document.createElement("div");
  projectEyebrowElem.classList.add("project-title--eyebrow");
  projectDetailsElem.appendChild(projectEyebrowElem);

  const projectOriginElem = document.createElement("span");
  projectOriginElem.textContent = projectOrigin;
  projectEyebrowElem.appendChild(projectOriginElem);

  const projectTechnologyListElem = document.createElement("ul");
  projectTechnologyListElem.classList.add("project-technologies-list");
  projectEyebrowElem.appendChild(projectTechnologyListElem);

  technologyUsed.forEach((item) => {
    const projectTechnologyItemElem = document.createElement("li");
    projectTechnologyItemElem.classList.add("project-technologies-item");
    projectTechnologyListElem.appendChild(projectTechnologyItemElem);

    const projectTechnologyImageElem = document.createElement("img");
    projectTechnologyImageElem.classList.add(
      { html: "html-icon", css: "css-icon", js: "js-icon" }[item],
    );
    projectTechnologyItemElem.appendChild(projectTechnologyImageElem);
  });

  const projectNameElem = document.createElement("h2");
  projectNameElem.classList.add("project-name");
  projectNameElem.textContent = projectName;
  projectDetailsElem.appendChild(projectNameElem);
};
