import axios from 'axios';
import { ref } from 'vue';

export const getAllTeams = async () => {
  const data = ref(null)
  const response = ref<any>(null)
  const error = ref<any>(null)
  const loading = ref(false)
  
  const fetch = async () => {
    loading.value = true;

    try {
      // https://statsapi.web.nhl.com/api/v1/teams
      const result = await axios.get("https://statsapi.web.nhl.com/api/v1/teams")
      
      response.value = result;
      data.value = result.data;
    }
    catch (e) {
      console.log(e)
      error.value = e;
    }
    finally {
      loading.value = false;
    }
  }

  fetch()
  return { data, response, error, loading }
}