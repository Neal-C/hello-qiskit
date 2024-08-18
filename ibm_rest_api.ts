import axios from 'axios';

interface AuthResponse {
  id: string;
}

async function main() {
  // Optionally obtain a temporary access token
  const url = 'https://auth.quantum-computing.ibm.com/api/users/loginWithToken';
  const input = { apiToken: '<MY_IBM_QUANTUM_TOKEN>' };
  
  try {
    const authResponse = await axios.post<AuthResponse>(url, input);
    const authId = authResponse.data.id;

    // View available backends
    const urlBackends = 'https://api.quantum-computing.ibm.com/runtime/backends';
    const headers = {
      'Content-Type': 'application/json',
      'x-access-token': authId,
    };

    const backendsResponse = await axios.get(urlBackends, { headers: headers });
    console.log(backendsResponse.data.devices.slice(0, 5), "...");

    // After your experiments are complete, you can proceed to invalidate your token and then test its invalidation.
    const logoutUrl = 'https://auth.quantum-computing.ibm.com/api/users/logout';
    
    const logoutResponse = await axios.post(logoutUrl, {}, { headers });
    console.log("response ok?:", logoutResponse.status === 200, logoutResponse.statusText);

    // This should yield an error (Error 401) once the access token is invalidated.
    const logoutResponseAfterInvalidation = await axios.post(logoutUrl, {}, { headers });

    if (logoutResponseAfterInvalidation.status === 200) {
      console.log("Job created:", logoutResponseAfterInvalidation.statusText);
    } else if (logoutResponseAfterInvalidation.status === 401) {
      console.log("invalid credentials. Access token should be successfully invalidated.");
    } else {
      console.log(logoutResponseAfterInvalidation.statusText, "\n");
      console.log(`Error: ${logoutResponseAfterInvalidation.status}`);
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.statusText);
    } else {
      console.error('Unexpected error:', error);
    }
  }
}

main();
