import axios from 'axios';
import { ref } from 'vue';

export const getAllTeams = async () => {
  const easternConference = ref<any>([])
  const westernConference = ref<any>([])
  const response = ref<any>(null)
  const error = ref<any>(null)
  const loading = ref(false)
  
  const fetch = async () => {
    loading.value = true;

    try {
      const result = await axios.get("https://statsapi.web.nhl.com/api/v1/teams")
      response.value = result;

      easternConference.value = result.data.teams.filter(x => x.conference.name === 'Eastern')
      westernConference.value = result.data.teams.filter(x => x.conference.name === 'Western')
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


  return { easternConference, westernConference, response, error, loading }
}

export const getTeamById = async (id: String) => {
  const data = ref<any>([])
  const teams = ref<any>([])
  const response = ref<any>(null)
  const error = ref<any>(null)
  const loading = ref(false)
  
  const fetch = async () => {
    loading.value = true;

    try {
      // https://statsapi.web.nhl.com/api/v1/teams/:id
      const result = await axios.get(`https://statsapi.web.nhl.com/api/v1/teams/${id}`)
      
      response.value = result;

      console.log(result.data.teams)
      data.value = result.data.teams
      
      const easternConference = data.filter(x => x.conference.name === 'Eastern')
      const westernConference = data.filter(x => x.conference.name === 'Western')

      teams.value = {
        easternConference,
        westernConference
      }

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
  return { teams, response, error, loading }
}