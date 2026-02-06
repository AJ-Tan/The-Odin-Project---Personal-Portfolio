import projectListData from "./projectListData.json";
import { projectItem } from "./_projectItem";

projectListData.projects.forEach((projectData) => {
  projectItem(projectData);
});
