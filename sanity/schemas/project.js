const project = {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Enter the Project title",
      type: "string",
    },
    {
      name: "url",
      title: "Enter the Project URL",
      type: "url",
    },
    

    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default project;
