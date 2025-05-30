export function getQuestions() {
  
}

export function getQuestionsByApp(appId) {
  // This function should return questions for a specific app
  // For now, it returns an empty array
  return [];
}

export function getQuestionsByDev(devId) {
  // This function should return questions for a specific developer
  // For now, it returns an empty array
  return [];
}

export async function createQuestion(formData) {
    console.log("Creating question with data service:", formData);
    
    const refImage = formData.get("file");
    //upload the image if it exists return URL
    const dataToPush = {
      question: formData.get("question"),
      spected_answer: formData.get("spectedAnswer"),
      screen_capture: refImage ? refImage.name : null,
      user_id: formData.get("userId"),
      q_type: formData.get("qType"),
    };
    const result = await createQuestion(dataToPush);

  // For now, it returns a success message
  return result;
}