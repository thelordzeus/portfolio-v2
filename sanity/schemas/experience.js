const experience = {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    {
      name: "company",
      title: "Enter the Company name",
      type: "string",
    },
    {
      name: "position",
      title: "Enter the position name",
      type: "string",
    },

    {
      name: "date",
      title: "Enter the date",
      type: "string",
    },
    {
      name: "url",
      title: "Enter Company URL",
      type: "url",
    },
    {
      name: "image",
      title: "Upload Company Logo",
      type: "image",
      Options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
        },
      ],
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default experience;
