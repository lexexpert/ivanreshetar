const Tag = () => {
  const tagList = [
    "React",
    "Redux",
    "Next.js",
    "Node.js",
    "React Native",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Git",
    "Jest",
    "AWS",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "ORM",
    "REST API",
    "GraphQL",
  ];
  return (
    <>
      {tagList.map((tag, i) => (
        <button className="resume-btn text-[15px]" key={i}>
          {tag}
        </button>
      ))}
    </>
  );
};

export default Tag;
