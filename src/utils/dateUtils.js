export const calculateStatusAndRemainingTime = (deadline) => {
  if (!deadline) return { status: "", remainingTime: "" };

  const today = new Date();
  const endDate = new Date(deadline);
  const diffTime = endDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  let status = "";
  let remainingTime = "";

  if (diffDays > 7) {
    status = "ongoing";
    remainingTime = `${diffDays} days left`;
  } else if (diffDays > 0) {
    status = "pending"; // close to deadline
    remainingTime = `${diffDays} days left`;
  } else if (diffDays === 0) {
    status = "pending";
    remainingTime = "Due today";
  } else {
    status = "delayed";
    remainingTime = `Overdue by ${Math.abs(diffDays)} days`;
  }

  return { status, remainingTime };
};
