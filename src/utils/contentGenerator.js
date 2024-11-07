export const generateRandomContentCard = (state, type) => {
  const nextId =
    state?.length > 0 ? Math.max(...state.map((card) => card.id)) + 1 : 1; // Increment the highest ID
  const randomProgress = Math.floor(Math.random() * 101); // Random progress between 0 and 100

  let typeDesc;
  switch (type) {
    case 1:
      typeDesc = "URL To Video";
      break;
    case 2:
      typeDesc = "Text To Video";
      break;
    case 3:
      typeDesc = "Speech To Video";
      break;
    case 4:
      typeDesc = "AI Avatar";
      break;
    default:
      typeDesc = "Unknown Type";
  }

  return {
    id: nextId,
    title: `Random Title ${nextId}`,
    typeDesc,
    image: `https://picsum.photos/600/400?random=${nextId}`,
    success: randomProgress === 100, // Set success to true only if progress is 100
    duration: Math.floor(Math.random() * 300), // Random duration between 0 and 299 seconds
    progress: randomProgress, // Use the generated random progress
    updated_at: new Date(), // Current date
    pinned: false,
  };
};
