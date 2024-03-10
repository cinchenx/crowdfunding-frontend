async function putProject(projectId, projectData) {
    const url = `${import.meta.env.VITE_API_URL}/projects/${projectId}`;
    const token = localStorage.getItem("token");
    
    
    const response = await fetch(url, { 
      method: "PUT",
      header: {
        "content-type":"application/json",
        "authorization": "token"

      },
      body: JSON.stringify({
        "title": title,
        "description": description,
        "goal": goal,
        "image":image,
      }),

    });
    
    if (!response.ok) {
      const fallbackError = `Error trying to update project`;
      const data = await response.json().catch(() => {
        throw new Error(fallbackError);
      });
      const errorMessage = data?.detail ?? fallbackError;
      throw new Error(errorMessage);
    }
    return await response.json();
  }
  
  export default putProject;