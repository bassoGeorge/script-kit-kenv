// Menu: Tech Breadth interview
// Description: Create a Things 3 project for technical breadth interview
const {executeJSON, showListByName} = await lib("things");

/* Run */
const candidateName = await arg("Enter Candidate's Name");
const projectName = `Breadth Interview: ${candidateName}`;
const data = createBreadthInterviewSchema(projectName);

await executeJSON(data, true);
await wait(10);
await showListByName(projectName);

/* ========================================== */
function createBreadthInterviewSchema(projectName) {
  const CheckPoints = [
    "Current tech stack",
    "Styling systems",
    "Different frameworks",
    "Backend knowledge",
    "Build system",
    "Deployment pipeline",
    "App security",
    "Authentication",
    "Testing",
    "Accessibility",
    "Component tooling like StoryBook",
  ];

  return [
    {
      type: "project",
      attributes: {
        title: projectName,
        "area-id": "Amqg4pfy2XUrUsgBgCAesf",
        items: CheckPoints.map(intoTodo),
      },
    },
  ];
}

function intoTodo(title) {
  return {
    type: "to-do",
    attributes: {
      title: title,
    },
  };
}
